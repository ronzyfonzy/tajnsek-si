# Email Module

This module handles email sending functionality for the TAJNSEK website contact form.

## FastMail Service

The `FastMailService` class provides a clean interface for sending emails via FastMail's JMAP API.

### Features

- **Session Management**: Automatically gets account ID from FastMail or uses cached value
- **Mailbox Detection**: Finds the appropriate Sent mailbox for storing sent emails
- **Identity Management**: Selects the correct sending identity based on email address
- **Error Handling**: Comprehensive error handling with detailed logging
- **Type Safety**: Full TypeScript support with proper interfaces

### Configuration

The service requires a FastMail API token and optionally an account ID:

```typescript
const fastMail = new FastMailService({
  apiToken: env.FASTMAIL_API_TOKEN,
  accountId: env.FASTMAIL_ACCOUNT_ID, // Optional - will be auto-detected if not provided
});
```

### Environment Variables

- `FASTMAIL_API_TOKEN` (required): Your FastMail API token
- `FASTMAIL_ACCOUNT_ID` (optional): Your FastMail account ID for faster processing

### Usage

```typescript
await fastMail.sendContactEmail({
  name: 'John Doe',
  email: 'john@example.com',
  company: 'Example Corp',
  message: 'Hello, I need help with...',
});
```

### Logging

The service provides detailed console logging for debugging:

- 🔐 Authentication status
- 📧 Email details
- 📂 Mailbox and identity discovery
- 📮 Sending process
- ✅ Success confirmation
- ❌ Error details

### Error Handling

The service throws descriptive errors for:

- Authentication failures
- Missing account/mailbox/identity information
- Email creation or submission failures
- Network errors

All errors are logged with context for easy debugging.
