import React from 'react';
import { Grid, Box, Button, Stack, Typography, Card, CardContent, Divider, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SecurityIcon from '@mui/icons-material/Security';
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
		<Stack spacing={10}>
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
					'&::before': {
						content: '""',
						position: 'absolute',
						width: 520,
						height: 520,
						borderRadius: '50%',
						background: 'radial-gradient(circle at 30% 30%, #0b5fff, transparent 60%)',
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
					<Button component={RouterLink} to="/case-studies" variant="outlined" size="large">
						See real results
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
						desc: 'Containerized, portable deployments. Cloud or on‑prem NAS with secure VPN.',
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

			<Box>
				<Typography variant="h4" fontWeight={800} gutterBottom>
					Services
				</Typography>
				<Grid container spacing={3}>
					{[
						{ title: 'Custom Applications', desc: 'React frontends, .NET/PHP backends, tailored to your workflows.' },
						{ title: 'Integrations & Automation', desc: 'Email capture, internal systems, workflow automation that reduces manual work.' },
						{ title: 'Deployments You Own', desc: 'Docker-based, portable, cloud or on‑prem NAS with secure VPN access.' },
						{ title: 'Operations & Coaching', desc: 'Monitoring, backup strategies, project management and delivery mentoring.' },
					].map((s) => (
						<Grid key={s.title} size={{ xs: 12, md: 6 }}>
							<Card variant="outlined" sx={{ borderRadius: 3 }}>
								<CardContent>
									<Typography variant="h6" fontWeight={700}>
										{s.title}
									</Typography>
									<Typography color="text.secondary">{s.desc}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
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
							<Card variant="outlined" sx={{ borderRadius: 3, height: '100%' }}>
								<CardContent>
									<Stack direction="row" spacing={2} alignItems="flex-start">
										<Box
											sx={{
												width: 36,
												height: 36,
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
