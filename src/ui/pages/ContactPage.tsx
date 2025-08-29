import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

export const ContactPage: React.FC = () => {
	return (
		<Stack spacing={3} maxWidth={560}>
			<Typography variant="h3" fontWeight={700}>
				Contact
			</Typography>
			<Typography color="text.secondary">Tell me about your project. I’ll reply within 1–2 business days.</Typography>
			<TextField label="Name" fullWidth />
			<TextField label="Email" type="email" fullWidth />
			<TextField label="Company" fullWidth />
			<TextField label="What problem are we solving?" fullWidth multiline minRows={4} />
			<Button variant="contained" size="large">
				Send
			</Button>
		</Stack>
	);
};
