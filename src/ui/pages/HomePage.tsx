import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
	return (
		<Stack spacing={8}>
			<Box textAlign="center" sx={{ py: 6 }}>
				<Typography variant="h2" fontWeight={700} gutterBottom>
					Custom software that fits your business
				</Typography>
				<Typography variant="h6" color="text.secondary" maxWidth={800} mx="auto">
					Skip the complexity of monolithic suites like SAP. Get a focused application built for your exact workflows, so your team adopts
					it faster and delivers results sooner.
				</Typography>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
					<Button component={RouterLink} to="/services" variant="contained" size="large">
						What I build
					</Button>
					<Button component={RouterLink} to="/case-studies" variant="outlined" size="large">
						See results
					</Button>
				</Stack>
			</Box>

			<Grid container spacing={4} columns={12}>
				{[
					{
						title: 'Purpose-built, no bloat',
						desc: 'Only the features you need. Faster onboarding. Less change management.',
					},
					{
						title: 'Adapts to your process',
						desc: 'Your system follows how you already work — not the other way around.',
					},
					{
						title: 'Own your infrastructure',
						desc: 'From cloud to on-prem NAS with secure VPN. Portable, containerized deployments.',
					},
				].map((item) => (
					<Grid key={item.title} size={{ xs: 12, md: 4 }}>
						<Stack spacing={1}>
							<Typography variant="h5" fontWeight={700}>
								{item.title}
							</Typography>
							<Typography color="text.secondary">{item.desc}</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};
