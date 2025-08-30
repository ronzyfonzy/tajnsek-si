import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useColorMode } from './AppThemeProvider';
import { ScrollToTop } from './ScrollToTop';

export const AppLayout: React.FC = () => {
	const theme = useTheme();
	const { mode, toggle } = useColorMode();
	return (
		<Box display="flex" flexDirection="column" minHeight="100vh">
			<ScrollToTop />
			<AppBar
				position="sticky"
				elevation={0}
				color="transparent"
				sx={{
					backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17,17,20,0.7)' : 'rgba(255,255,255,0.7)',
					backdropFilter: 'saturate(180%) blur(10px)',
					borderBottom: '1px solid',
					borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'divider',
				}}
			>
				<Toolbar sx={{ position: 'relative' }}>
					{/* Left navigation */}
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Button component={RouterLink} to="/services" color="inherit">
							Services
						</Button>
						<Button component={RouterLink} to="/about" color="inherit">
							About
						</Button>
					</Box>

					{/* Center brand */}
					<Typography
						variant="h6"
						component={RouterLink}
						to="/"
						sx={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						Robert Tajnšek / Artera s.p.
					</Typography>

					{/* Right actions */}
					<Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
						<Button component={RouterLink} to="/contact" variant="contained" sx={{ mx: 1 }}>
							Contact
						</Button>
						<IconButton aria-label="toggle color mode" onClick={toggle} color="inherit">
							{theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Container sx={{ flex: 1, py: 6 }}>
				<Outlet />
			</Container>
			<Box component="footer" sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
				<Typography variant="body2">© {new Date().getFullYear()} Robert Tajnšek / Artera s.p.</Typography>
			</Box>
		</Box>
	);
};
