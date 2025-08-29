import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppLayout } from './ui/AppLayout';
import { HomePage } from './ui/pages/HomePage';
import { ServicesPage } from './ui/pages/ServicesPage';
import { CaseStudiesPage } from './ui/pages/CaseStudiesPage';
import { AboutPage } from './ui/pages/AboutPage';
import { ContactPage } from './ui/pages/ContactPage';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: '#0b5fff' },
		secondary: { main: '#00c7b7' },
	},
	shape: { borderRadius: 10 },
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'services', element: <ServicesPage /> },
			{ path: 'case-studies', element: <CaseStudiesPage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
]);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
