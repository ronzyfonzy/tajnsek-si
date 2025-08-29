import React from 'react';
import { Stack, Typography } from '@mui/material';

export const CaseStudiesPage: React.FC = () => {
	return (
		<Stack spacing={3}>
			<Typography variant="h3" fontWeight={700}>
				Case Studies
			</Typography>
			<Typography>BOSCH SWOT Analysis — Focused decision support tool used in workshops.</Typography>
			<Typography>
				Supplier Relationship Management — Custom email integration to capture action items from meetings and drive follow‑ups.
			</Typography>
			<Typography>
				CRM for Product Assembly — Streamlined product and assembly tracking, containerized and hosted on client NAS with secure VPN.
			</Typography>
		</Stack>
	);
};
