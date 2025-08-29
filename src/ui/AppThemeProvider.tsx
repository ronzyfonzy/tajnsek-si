import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, GlobalStyles } from '@mui/material';

type ColorMode = 'light' | 'dark';

export const ColorModeContext = React.createContext<{ mode: ColorMode; toggle: () => void }>({
	mode: 'light',
	toggle: () => {},
});

function getInitialMode(): ColorMode {
	if (typeof window === 'undefined') return 'light';
	const stored = window.localStorage.getItem('color-mode') as ColorMode | null;
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const AppThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [mode, setMode] = React.useState<ColorMode>(getInitialMode);

	React.useEffect(() => {
		try {
			window.localStorage.setItem('color-mode', mode);
		} catch {}
	}, [mode]);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: { main: '#0b5fff' },
					secondary: { main: '#00c7b7' },
					background: {
						default: mode === 'light' ? '#f7f9fc' : '#0b0f14',
						paper: mode === 'light' ? '#ffffff' : '#10151c',
					},
				},
				shape: { borderRadius: 4 },
				typography: {
					fontFamily: 'Ubuntu, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
				},
			}),
		[mode]
	);

	const value = React.useMemo(() => ({ mode, toggle: () => setMode((m) => (m === 'light' ? 'dark' : 'light')) }), [mode]);

	return (
		<ColorModeContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles
					styles={{
						body: {
							backgroundColor: theme.palette.background.default,
							backgroundImage:
								mode === 'light'
									? 'radial-gradient(600px 300px at 25% 10%, rgba(11,95,255,0.04) 0%, rgba(11,95,255,0) 60%), radial-gradient(600px 300px at 90% 30%, rgba(0,199,183,0.035) 0%, rgba(0,199,183,0) 55%)'
									: 'radial-gradient(600px 300px at 25% 10%, rgba(11,95,255,0.10) 0%, rgba(11,95,255,0) 60%), radial-gradient(600px 300px at 90% 30%, rgba(0,199,183,0.08) 0%, rgba(0,199,183,0) 55%)',
							backgroundAttachment: 'fixed',
						},
					}}
				/>
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export function useColorMode() {
	return React.useContext(ColorModeContext);
}
