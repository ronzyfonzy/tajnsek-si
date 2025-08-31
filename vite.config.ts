import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Vendor chunk for React and related libraries
					'vendor-react': ['react', 'react-dom', 'react-router-dom'],

					// Material UI chunk (largest dependency)
					'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],

					// Fonts chunk
					'vendor-fonts': ['@fontsource/instrument-sans'],
				},
			},
		},
		// Reduce chunk size warning threshold
		chunkSizeWarningLimit: 300,
	},
});
