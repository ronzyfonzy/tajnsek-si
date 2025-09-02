import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/instrument-sans/400.css?display=swap';
import '@fontsource/instrument-sans/700.css?display=swap';
import { AppLayout } from './ui/AppLayout';
import { AppThemeProvider } from './ui/AppThemeProvider';
import { HomePage } from './ui/pages/HomePage';
import { ServicesPage } from './ui/pages/ServicesPage';
import { AboutPage } from './ui/pages/AboutPage';
import { ContactPage } from './ui/pages/ContactPage';
import { NotFoundPage } from './ui/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
