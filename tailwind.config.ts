import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config