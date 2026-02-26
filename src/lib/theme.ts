import { createTheme } from '@mui/material';
import type { Language } from '../constants/i18n';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		gradient: true;
	}
}

const getButtonGradient = (lang: Language) => {
	switch (lang) {
		case 'en':
			return {
				background: 'linear-gradient(41deg, #0044ff 0%, #00c6ff 100%)',
				hover: 'linear-gradient(41deg, #0033cc 0%, #0099cc 100%)',
			};
		case 'ru':
			return {
				background: 'linear-gradient(41deg, #ff512f 0%, #dd2476 100%)',
				hover: 'linear-gradient(41deg, #ff512f 50%, #dd2476 100%)',
			};
		case 'tr':
			return {
				background: 'linear-gradient(41deg, #00b09b 0%, #96c93d 100%)',
				hover: 'linear-gradient(41deg, #00a08a 0%, #7fb52f 100%)',
			};
		default:
			return {
				background: 'linear-gradient(41deg, #ff8d6b 0%, #ffba47 100%)',
				hover: 'linear-gradient(41deg, #ff8d6b 50%, #ffba47 100%)',
			};
	}
};

export const getFooterBackground = (lang: Language) => {
	switch (lang) {
		case 'en':
			return 'linear-gradient(270deg, #06225d 0%, #02011f 37.03%)';
		case 'ru':
			return 'linear-gradient(270deg, #2c3e50 0%, #000000 100%)';
		case 'tr':
			return 'linear-gradient(270deg, #134e5e 0%, #71b280 100%)';
		default:
			return 'linear-gradient(270deg, #06225d 0%, #02011f 37.03%)';
	}
};

export const createAppTheme = (locale: Language) => {
	const gradient = getButtonGradient(locale);

	return createTheme({
		components: {
			MuiSelect: {
				styleOverrides: {
					root: {
						borderRadius: '8px',
						border: '1px solid rgba(255, 255, 255, 0.1)',
						backdropFilter: 'blur(10px)',
						background: 'rgba(255, 255, 255, 0.1)',
						color: '#bababa',
						'& .MuiSelect-icon': {
							color: '#fff',
						},
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: '12px',
						minHeight: '56px',
					},
				},
				variants: [
					{
						props: { variant: 'gradient' },
						style: {
							background: gradient.background,
							color: '#fff',
							'&:hover': {
								background: gradient.hover,
							},
						},
					},
				],
			},
		},
	});
};

// const theme = createTheme({
// 	components: {
// 		MuiSelect: {
// 			styleOverrides: {
// 				root: {
// 					borderRadius: '8px',
// 					border: '1px solid rgba(255, 255, 255, 0.1)',
// 					backdropFilter: 'blur(10px)',
// 					background: 'rgba(255, 255, 255, 0.1)',
// 					color: '#bababa',
// 					'& .MuiSelect-icon': {
// 						color: '#fff',
// 					},
// 				},
// 			},
// 		},
// 		MuiButton: {
// 			styleOverrides: {
// 				root: {
// 					borderRadius: '12px',
// 					minHeight: '56px',
// 				},
// 			},
// 			variants: [
// 				{
// 					props: { variant: 'gradient' },
// 					style: {
// 						background: 'linear-gradient(41deg, #ff8d6b 0%, #ffba47 100%)',
// 						color: '#FFFFFF',
// 						'&:hover': {
// 							background: 'linear-gradient(41deg, #ff8d6b 50%, #ffba47 100%)',
// 						},
// 					},
// 				},
// 			],
// 		},
// 	},
// });

export default createAppTheme;
