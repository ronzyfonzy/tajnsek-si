import React from 'react';
import { Grid, Box, Button, Stack, Typography, Card, CardContent, Divider, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SecurityIcon from '@mui/icons-material/Security';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DnsIcon from '@mui/icons-material/Dns';
import TerminalIcon from '@mui/icons-material/Terminal';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Link as RouterLink } from 'react-router-dom';

const float = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(10px, -12px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const HomePage: React.FC = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	return (
		<Stack spacing={6}>
			<Box
				textAlign="center"
				sx={{
					py: { xs: 8, md: 12 },
					px: 2,
					borderRadius: 3,
					position: 'relative',
					overflow: 'hidden',
					background: isDark
						? 'linear-gradient(135deg, rgba(11,95,255,0.12) 0%, rgba(0,199,183,0.10) 100%)'
						: 'linear-gradient(135deg, rgba(11,95,255,0.08) 0%, rgba(0,199,183,0.08) 100%)',
					// red
					// ? 'linear-gradient(135deg, rgba(229,57,53,0.12) 0%, rgba(255,23,68,0.10) 100%)'
					// : 'linear-gradient(135deg, rgba(229,57,53,0.08) 0%, rgba(255,23,68,0.08) 100%)'
					'&::before': {
						content: '""',
						position: 'absolute',
						width: 520,
						height: 520,
						borderRadius: '50%',
						background: 'radial-gradient(circle at 30% 30%, #0b5fff, transparent 60%)',
						// background: 'radial-gradient(circle at 30% 30%, #e53935, transparent 60%)',
						filter: 'blur(80px)',
						opacity: isDark ? 0.18 : 0.28,
						top: -120,
						left: -120,
						animation: `${float} 14s ease-in-out infinite`,
					},
					'&::after': {
						content: '""',
						position: 'absolute',
						width: 520,
						height: 520,
						borderRadius: '50%',
						background: 'radial-gradient(circle at 70% 70%, #00c7b7, transparent 60%)',
						// background: 'radial-gradient(circle at 70% 70%, #ff1744, transparent 60%)',
						filter: 'blur(90px)',
						opacity: isDark ? 0.16 : 0.24,
						bottom: -140,
						right: -140,
						animation: `${float} 18s ease-in-out -4s infinite`,
					},
				}}
			>
				<Typography variant="overline" color="primary" sx={{ letterSpacing: 1, fontWeight: 700 }}>
					CUSTOM SOFTWARE, ZERO BLOAT
				</Typography>
				<Typography variant="h2" fontWeight={800} gutterBottom>
					Software that adapts to your business — not the other way around
				</Typography>
				<Typography variant="h6" color="text.secondary" maxWidth={900} mx="auto">
					I design and ship focused applications that match your exact workflows. Faster onboarding, clean integrations, and deployments you
					can own — cloud or on‑prem.
				</Typography>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
					<Button component={RouterLink} to="/services" variant="contained" size="large">
						See what I build
					</Button>
				</Stack>
			</Box>

			<Grid container spacing={4}>
				{[
					{
						icon: <CheckCircleIcon color="primary" />,
						title: 'Purpose‑built, no bloat',
						desc: 'Only the features you need. Less training, higher adoption, faster ROI.',
					},
					{
						icon: <BuildCircleIcon color="primary" />,
						title: 'Fits your process',
						desc: 'Your system mirrors how your team already works. No forced change management.',
					},
					{
						icon: <BoltIcon color="primary" />,
						title: 'Integrates cleanly',
						desc: 'Email, internal tools, and data flows — connected without the complexity.',
					},
					{
						icon: <SecurityIcon color="primary" />,
						title: 'Own your infra',
						desc: 'Containerized, portable deployments. Cloud or on‑prem with secure VPN.',
					},
				].map((item) => (
					<Grid key={item.title} size={{ xs: 12, md: 6, lg: 3 }}>
						<Card
							variant="outlined"
							sx={{
								height: '100%',
								borderRadius: 3,
								transition: 'transform .2s ease, box-shadow .2s ease',
								'&:hover': {
									transform: 'translateY(-2px)',
									boxShadow: 4,
								},
							}}
						>
							<CardContent>
								<Stack spacing={1.5}>
									<Box>{item.icon}</Box>
									<Typography variant="h6" fontWeight={700}>
										{item.title}
									</Typography>
									<Typography color="text.secondary">{item.desc}</Typography>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			<Divider sx={{ my: 6 }} />

			<Box>
				<Typography variant="h4" fontWeight={800} gutterBottom>
					Services
				</Typography>
				<Grid container spacing={3}>
					{[
						{
							icon: <WebAssetIcon color="primary" />,
							title: 'Custom applications',
							desc: 'React/Blazor frontends and .NET/PHP backends, modeled to your workflows with clear UX and data flows.',
						},
						{
							icon: <IntegrationInstructionsIcon color="primary" />,
							title: 'Integrations & automation',
							desc: 'Connect disconnected systems and eliminate repetitive tasks. Transform manual processes into seamless workflows.',
						},
						{
							icon: <DnsIcon color="primary" />,
							title: 'Deployments you own',
							desc: 'Dockerized services on cloud or on‑prem, with secure VPN access and backups.',
						},
						{
							icon: <TerminalIcon color="primary" />,
							title: 'Operations & coaching',
							desc: 'Monitoring, CI/CD, release discipline, and project delivery coaching that sticks.',
						},
					].map((s) => (
						<Grid key={s.title} size={{ xs: 12, md: 6 }}>
							<Card
								variant="outlined"
								sx={{
									borderRadius: 3,
									height: '100%',
									transition: 'transform .2s ease, box-shadow .2s ease',
									'&:hover': { transform: 'translateY(-2px)', boxShadow: 4 },
								}}
							>
								<CardContent>
									<Stack spacing={1.5}>
										<Box>{s.icon}</Box>
										<Typography variant="h6" fontWeight={700}>
											{s.title}
										</Typography>
										<Typography color="text.secondary">{s.desc}</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			<Divider sx={{ my: 6 }} />

			<Box>
				<Typography variant="h4" fontWeight={800} gutterBottom textAlign="center">
					Off-the-Shelf vs. Custom-Built
				</Typography>
				<Typography variant="h6" color="text.secondary" maxWidth={800} mx="auto" textAlign="center" sx={{ mb: 6 }}>
					Large, one-size-fits-all systems can seem like a safe bet, but they often force you to change how you work. A custom solution is built around your existing processes.
				</Typography>
				<Grid container spacing={4}>
					<Grid size={{ xs: 12, md: 6 }}>
						<Card
							variant="outlined"
							sx={{
								borderRadius: 3,
								height: '100%',
								borderColor: 'error.light',
								backgroundColor: isDark ? 'rgba(229, 57, 53, 0.05)' : 'rgba(229, 57, 53, 0.03)',
							}}
						>
							<CardContent>
								<Typography variant="h5" fontWeight={700} gutterBottom>
									The "Big System" Way
								</Typography>
								<Typography color="text.secondary" sx={{ mb: 3 }}>
									(e.g., SAP, Salesforce, NetSuite)
								</Typography>
								<Stack spacing={2}>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<ClearIcon color="error" />
										<Typography>Forces you to adapt your process to the software.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<ClearIcon color="error" />
										<Typography>High complexity and a steep learning curve for your team.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<ClearIcon color="error" />
										<Typography>Expensive licensing, hidden fees, and costly customizations.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<ClearIcon color="error" />
										<Typography>Bloated with unused features that create clutter.</Typography>
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Card
							variant="outlined"
							sx={{
								borderRadius: 3,
								height: '100%',
								borderColor: 'success.light',
								backgroundColor: isDark ? 'rgba(102, 187, 106, 0.05)' : 'rgba(102, 187, 106, 0.03)',
							}}
						>
							<CardContent>
								<Typography variant="h5" fontWeight={700} gutterBottom>
									The Custom Approach
								</Typography>
								<Typography color="text.secondary" sx={{ mb: 3 }}>
									(Built for you)
								</Typography>
								<Stack spacing={2}>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<CheckIcon color="success" />
										<Typography>Designed for your exact workflow and business logic.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<CheckIcon color="success" />
										<Typography>Intuitive and simple, because it only does what you need.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<CheckIcon color="success" />
										<Typography>No per-user fees. You own the code and the infrastructure.</Typography>
									</Stack>
									<Stack direction="row" spacing={1.5} alignItems="center">
										<CheckIcon color="success" />
										<Typography>Lean and focused. Evolves with your business needs.</Typography>
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>

			<Divider sx={{ my: 6 }} />
			<Box>
				<Typography variant="h4" fontWeight={800} gutterBottom>
					How I work
				</Typography>
				<Grid container spacing={3}>
					{[
						{ step: '1', title: 'Initial meeting', desc: 'Understand goals, constraints, and success metrics.' },
						{ step: '2', title: 'Project overview', desc: 'Outline scope, architecture options, and milestones.' },
						{ step: '3', title: 'Review & planning', desc: 'Refine requirements, plan iterations and deliverables.' },
						{ step: '4', title: 'Offer', desc: 'Clear proposal with timeline, budget, and outcomes.' },
						{ step: '5', title: 'Implementation', desc: 'Iterative delivery with demos, feedback, and quality gates.' },
						{ step: '6', title: 'Continuous delivery', desc: 'Ongoing improvements, monitoring, and support.' },
					].map((p) => (
						<Grid key={p.step} size={{ xs: 12, md: 6, lg: 4 }}>
							<Card
								variant="outlined"
								sx={{
									borderRadius: 3,
									height: '100%',
									transition: 'transform .2s ease, box-shadow .2s ease',
									'&:hover': {
										transform: 'translateY(-2px)',
										boxShadow: 4,
									},
								}}
							>
								<CardContent>
									<Stack direction="row" spacing={2} alignItems="flex-start">
										<Box
											sx={{
												width: 38,
												height: 30,
												borderRadius: '50%',
												backgroundColor: 'primary.main',
												color: 'primary.contrastText',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												fontWeight: 700,
											}}
										>
											{p.step}
										</Box>
										<Box>
											<Typography variant="h6" fontWeight={700}>
												{p.title}
											</Typography>
											<Typography color="text.secondary">{p.desc}</Typography>
										</Box>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Stack>
	);
};
