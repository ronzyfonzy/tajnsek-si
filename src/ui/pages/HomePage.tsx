import React from 'react';
import { Grid, Box, Button, Stack, Typography, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SecurityIcon from '@mui/icons-material/Security';
import { Link as RouterLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
	return (
		<Stack spacing={10}>
			<Box
				textAlign="center"
				sx={{
					py: { xs: 8, md: 12 },
					px: 2,
					borderRadius: 3,
					background: 'linear-gradient(135deg, rgba(11,95,255,0.08) 0%, rgba(0,199,183,0.08) 100%)',
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
						<Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
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
		</Stack>
	);
};
