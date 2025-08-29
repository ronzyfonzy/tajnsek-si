import React from 'react';
import { Stack, Typography, List, ListItem, ListItemText } from '@mui/material';

export const ServicesPage: React.FC = () => {
	return (
		<Stack spacing={3}>
			<Typography variant="h3" fontWeight={700}>
				Services
			</Typography>
			<Typography color="text.secondary" maxWidth={900}>
				I design and build custom applications end‑to‑end: from discovery and architecture to development, deployment, and training.
			</Typography>
			<List>
				{[
					'Custom web and desktop apps (React, .NET, PHP)',
					'Integrations with internal tools and email/workflow automation',
					'Containerization and orchestration (Docker), on‑prem or cloud',
					'Secure remote access (VPN), backups, monitoring',
					'Project management and delivery coaching',
					'Technical due diligence and modernization consulting',
				].map((text) => (
					<ListItem key={text} disableGutters>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Stack>
	);
};
