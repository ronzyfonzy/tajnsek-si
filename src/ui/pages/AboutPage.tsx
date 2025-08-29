import React from 'react';
import { Stack, Typography } from '@mui/material';

export const AboutPage: React.FC = () => {
	return (
		<Stack spacing={3}>
			<Typography variant="h3" fontWeight={700}>
				About
			</Typography>
			<Typography maxWidth={900}>
				I’m TAJNSEK. I build reliable, maintainable systems with modern stacks: .NET, PHP, React, Docker, and robust CI/CD. I also help
				teams design processes that stick — so software changes actually land.
			</Typography>
			<Typography>Experience: multi‑year delivery across custom apps, integrations, deployments, and on‑prem/cloud operations.</Typography>
		</Stack>
	);
};
