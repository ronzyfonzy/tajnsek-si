import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link as RouterLink } from 'react-router-dom';

export const AppLayout: React.FC = () => {
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
					<IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
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
					<Button component={RouterLink} to="/contact" variant="contained">
						Contact
					</Button>
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
