import React, { Suspense, lazy } from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { CircularProgress } from '@mui/material';

// Lazy load icon components
const iconComponents = {
	// Common icons (loaded immediately)
	DarkModeOutlined: lazy(() => import('@mui/icons-material/DarkModeOutlined')),
	LightModeOutlined: lazy(() => import('@mui/icons-material/LightModeOutlined')),

	// Page-specific icons (loaded on demand)
	Email: lazy(() => import('@mui/icons-material/Email')),
	Phone: lazy(() => import('@mui/icons-material/Phone')),
	LocationOn: lazy(() => import('@mui/icons-material/LocationOn')),
	ErrorOutline: lazy(() => import('@mui/icons-material/ErrorOutline')),

	// Feature icons
	CheckCircle: lazy(() => import('@mui/icons-material/CheckCircle')),
	Bolt: lazy(() => import('@mui/icons-material/Bolt')),
	BuildCircle: lazy(() => import('@mui/icons-material/BuildCircle')),
	Security: lazy(() => import('@mui/icons-material/Security')),
	WebAsset: lazy(() => import('@mui/icons-material/WebAsset')),
	IntegrationInstructions: lazy(() => import('@mui/icons-material/IntegrationInstructions')),
	Dns: lazy(() => import('@mui/icons-material/Dns')),
	Terminal: lazy(() => import('@mui/icons-material/Terminal')),
	Check: lazy(() => import('@mui/icons-material/Check')),
	Clear: lazy(() => import('@mui/icons-material/Clear')),
	QueryStats: lazy(() => import('@mui/icons-material/QueryStats')),
	Handshake: lazy(() => import('@mui/icons-material/Handshake')),
	Autorenew: lazy(() => import('@mui/icons-material/Autorenew')),
	Timeline: lazy(() => import('@mui/icons-material/Timeline')),
	Visibility: lazy(() => import('@mui/icons-material/Visibility')),
	AccountTree: lazy(() => import('@mui/icons-material/AccountTree')),
	School: lazy(() => import('@mui/icons-material/School')),
	GitHub: lazy(() => import('@mui/icons-material/GitHub')),
	LinkedIn: lazy(() => import('@mui/icons-material/LinkedIn')),
	QuestionAnswer: lazy(() => import('@mui/icons-material/QuestionAnswer')),
};

export type IconName = keyof typeof iconComponents;

interface DynamicIconProps extends SvgIconProps {
	name: IconName;
	fallback?: React.ReactNode;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, fallback = <CircularProgress size={24} />, ...props }) => {
	const IconComponent = iconComponents[name];

	return (
		<Suspense fallback={fallback}>
			<IconComponent {...props} />
		</Suspense>
	);
};
