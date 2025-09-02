import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NotFoundPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="60vh" textAlign="center">
      <Stack spacing={3} alignItems="center">
        <ErrorOutlineIcon color="primary" sx={{ fontSize: 80 }} />
        <Typography variant="h2" fontWeight={700}>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Page not found
        </Typography>
        <Typography color="text.secondary" maxWidth={400}>
          The page you're looking for doesn't exist.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" size="large">
          Back to Home
        </Button>
      </Stack>
    </Box>
  );
};
