import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useColorMode } from './AppThemeProvider';

export const AppLayout: React.FC = () => {
	const theme = useTheme();
	const { mode, toggle } = useColorMode();
	return (
		<Box display="flex" flexDirection="column" minHeight="100vh">
			<AppBar
				position="sticky"
				elevation={0}
				color="transparent"
				sx={{
					backgroundColor: 'rgba(255,255,255,0.7)',
					backdropFilter: 'saturate(180%) blur(10px)',
					borderBottom: '1px solid',
					borderColor: 'divider',
				}}
			>
				<Toolbar>	
					<Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
						TAJNSEK
					</Typography>
					<Button component={RouterLink} to="/services" color="inherit">
						Services
					</Button>
					<Button component={RouterLink} to="/case-studies" color="inherit">
						Case Studies
					</Button>
					<Button component={RouterLink} to="/about" color="inherit">
						About
					</Button>
					<Button component={RouterLink} to="/contact" variant="contained" sx={{ mr: 1 }}>
						Contact
					</Button>
					<IconButton aria-label="toggle color mode" onClick={toggle} color="inherit">
						{theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container sx={{ flex: 1, py: 6 }}>
				<Outlet />
			</Container>
			<Box component="footer" sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
				<Typography variant="body2">© {new Date().getFullYear()} TAJNSEK — Custom Software</Typography>
			</Box>
		</Box>
	);
};
