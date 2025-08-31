interface ContactFormData {
	name: string;
	email: string;
	company: string;
	message: string;
}

interface FastMailConfig {
	apiToken: string;
	accountId?: string;
}

const FROM_EMAIL = 'hello@robert.tajnsek.si';
const TO_EMAIL = 'robert@tajnsek.si';

export class FastMailService {
	private config: FastMailConfig;

	constructor(config: FastMailConfig) {
		this.config = config;
	}

	async sendContactEmail(data: ContactFormData): Promise<void> {
		console.log('🔐 FastMail API Token found, attempting to send email');
		console.log('📧 Email details:', {
			from: FROM_EMAIL,
			to: TO_EMAIL,
			replyTo: data.email,
			subject: `New contact form: ${data.name} - ${data.company || 'No company'}`,
		});

		const emailBody = this.createEmailBody(data);
		const accountId = await this.getAccountId();
		const { sentMailboxId, identityId } = await this.getMailboxAndIdentity(accountId);

		await this.sendEmail(accountId, sentMailboxId, identityId, data, emailBody);
		console.log('✅ Email sent successfully!');
	}

	private createEmailBody(data: ContactFormData): string {
		return `
New contact form submission from tajnsek.si:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}

Message:
${data.message}

---
Sent from tajnsek.si contact form
		`.trim();
	}

	private async getAccountId(): Promise<string> {
		if (this.config.accountId) {
			console.log('🔍 Using account ID from config:', this.config.accountId);
			return this.config.accountId;
		}

		console.log('📝 Getting session info from FastMail');
		const sessionResponse = await fetch('https://api.fastmail.com/jmap/session', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.config.apiToken}`,
			},
		});

		if (!sessionResponse.ok) {
			const errorText = await sessionResponse.text();
			console.error('❌ Failed to get session - Response:', errorText);
			throw new Error('Failed to authenticate with email service');
		}

		const sessionData = (await sessionResponse.json()) as any;
		console.log('📋 Session data:', JSON.stringify(sessionData, null, 2));

		// Try primary accounts first
		let accountId = sessionData?.primaryAccounts?.['urn:ietf:params:jmap:mail'];
		console.log('🔍 Primary account ID:', accountId);

		// If not found, try accounts object
		if (!accountId) {
			const accounts = sessionData?.accounts;
			console.log('🔍 All accounts:', JSON.stringify(accounts, null, 2));

			if (accounts) {
				// Find the first mail account
				for (const [id, account] of Object.entries(accounts)) {
					if ((account as any).accountCapabilities?.['urn:ietf:params:jmap:mail']) {
						accountId = id;
						console.log('🔍 Found mail account ID:', accountId);
						break;
					}
				}
			}
		}

		// If still not found, try using the first account
		if (!accountId && sessionData?.accounts) {
			const firstAccountId = Object.keys(sessionData.accounts)[0];
			if (firstAccountId) {
				accountId = firstAccountId;
				console.log('🔍 Using first account ID:', accountId);
			}
		}

		if (!accountId) {
			console.error('❌ Could not find any account ID in session response');
			throw new Error('Email account not found');
		}

		console.log('🆔 Using account ID:', accountId);
		return accountId;
	}

	private async getMailboxAndIdentity(accountId: string): Promise<{ sentMailboxId: string; identityId: string }> {
		console.log('📂 Getting mailboxes and identities');
		const mailboxRequest = {
			using: ['urn:ietf:params:jmap:core', 'urn:ietf:params:jmap:mail', 'urn:ietf:params:jmap:submission'],
			methodCalls: [
				[
					'Mailbox/get',
					{
						accountId: accountId,
					},
					'0',
				],
				[
					'Identity/get',
					{
						accountId: accountId,
					},
					'1',
				],
			],
		};

		const mailboxResponse = await fetch('https://api.fastmail.com/jmap/api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.config.apiToken}`,
			},
			body: JSON.stringify(mailboxRequest),
		});

		let sentMailboxId = 'INBOX'; // Default fallback
		let identityId = null;

		if (mailboxResponse.ok) {
			const mailboxResult = (await mailboxResponse.json()) as any;
			console.log('📂 Mailboxes and identities response:', JSON.stringify(mailboxResult, null, 2));

			// Get mailboxes
			const mailboxes = mailboxResult.methodResponses?.[0]?.[1]?.list || [];
			const sentMailbox = mailboxes.find((mb: any) => mb.role === 'sent' || mb.name?.toLowerCase().includes('sent'));
			if (sentMailbox) {
				sentMailboxId = sentMailbox.id;
				console.log('📂 Found Sent mailbox ID:', sentMailboxId);
			} else if (mailboxes[0]?.id) {
				sentMailboxId = mailboxes[0].id;
				console.log('📂 Using first mailbox as fallback:', sentMailboxId);
			}

			// Get identities
			const identities = mailboxResult.methodResponses?.[1]?.[1]?.list || [];
			console.log('🆔 Available identities:', JSON.stringify(identities, null, 2));

			// Find an identity that matches our from address or use the first one
			const matchingIdentity = identities.find((id: any) => id.email === FROM_EMAIL || id.email === TO_EMAIL);

			if (matchingIdentity) {
				identityId = matchingIdentity.id;
				console.log('🆔 Found matching identity:', identityId);
			} else if (identities.length > 0) {
				identityId = identities[0].id;
				console.log('🆔 Using first identity as fallback:', identityId);
			}
		}

		if (!identityId) {
			throw new Error('No sending identity found');
		}

		console.log('📂 Using mailbox:', sentMailboxId, 'and identity:', identityId);
		return { sentMailboxId, identityId };
	}

	private async sendEmail(
		accountId: string,
		sentMailboxId: string,
		identityId: string,
		data: ContactFormData,
		emailBody: string
	): Promise<void> {
		const jmapRequest = {
			using: ['urn:ietf:params:jmap:core', 'urn:ietf:params:jmap:mail', 'urn:ietf:params:jmap:submission'],
			methodCalls: [
				[
					'Email/set',
					{
						accountId: accountId,
						create: {
							email1: {
								mailboxIds: {
									[sentMailboxId]: true,
								},
								from: [{ email: FROM_EMAIL }],
								to: [{ email: TO_EMAIL }],
								replyTo: [{ email: data.email }],
								subject: `New contact form: ${data.name} - ${data.company || 'No company'}`,
								textBody: [
									{
										partId: 'text',
										type: 'text/plain',
									},
								],
								bodyValues: {
									text: {
										value: emailBody,
									},
								},
							},
						},
					},
					'0',
				],
				[
					'EmailSubmission/set',
					{
						accountId: accountId,
						create: {
							submission1: {
								emailId: '#email1',
								identityId: identityId,
								envelope: {
									mailFrom: { email: FROM_EMAIL },
									rcptTo: [{ email: TO_EMAIL }],
								},
							},
						},
					},
					'1',
				],
			],
		};

		console.log('📮 Sending email with account ID:', accountId);

		const emailResponse = await fetch('https://api.fastmail.com/jmap/api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.config.apiToken}`,
			},
			body: JSON.stringify(jmapRequest),
		});

		console.log('📡 FastMail API response status:', emailResponse.status);

		if (!emailResponse.ok) {
			const errorText = await emailResponse.text();
			console.error('❌ Failed to send email - Response:', errorText);
			throw new Error('Failed to send email');
		}

		const result = (await emailResponse.json()) as any;
		console.log('📋 Full JMAP response:', JSON.stringify(result, null, 2));

		// Check for email creation errors
		if (result.methodResponses?.[0]?.[1]?.notCreated) {
			console.error('❌ Email creation failed:', result.methodResponses[0][1].notCreated);
			throw new Error('Failed to create email');
		}

		// Check for submission errors
		if (result.methodResponses?.[1]?.[1]?.notCreated) {
			console.error('❌ Email submission failed:', result.methodResponses[1][1].notCreated);
			throw new Error('Failed to submit email');
		}
	}
}
