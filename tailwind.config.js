const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
			},
		},
	},
	plugins: [typography],
};
