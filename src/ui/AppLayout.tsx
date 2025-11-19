import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, useTheme, Menu, MenuItem, useMediaQuery } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { useColorMode } from './AppThemeProvider';
import { ScrollToTop } from './ScrollToTop';

export const AppLayout: React.FC = () => {
  const theme = useTheme();
  const { toggle } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          {isMobile ? (
            // Mobile layout
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                }}
              >
                Robert Tajnšek / Artera s.p.
              </Typography>

              <IconButton aria-label="toggle color mode" onClick={toggle} color="inherit">
                {theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
              </IconButton>

              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ mt: 1 }}>
                <MenuItem component={RouterLink} to="/" onClick={handleMenuClose} selected={isActive('/')}>
                  Home
                </MenuItem>
                <MenuItem component={RouterLink} to="/services" onClick={handleMenuClose} selected={isActive('/services')}>
                  Services
                </MenuItem>
                <MenuItem component={RouterLink} to="/about" onClick={handleMenuClose} selected={isActive('/about')}>
                  About
                </MenuItem>
                <MenuItem component={RouterLink} to="/contact" onClick={handleMenuClose} selected={true}>
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            // Desktop layout
            <>
              {/* Left navigation */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button component={RouterLink} to="/" color="inherit" variant={isActive('/') ? 'outlined' : 'text'}>
                  Home
                </Button>
                <Button component={RouterLink} to="/services" color="inherit" variant={isActive('/services') ? 'outlined' : 'text'}>
                  Services
                </Button>
                <Button component={RouterLink} to="/about" color="inherit" variant={isActive('/about') ? 'outlined' : 'text'}>
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
            </>
          )}
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
