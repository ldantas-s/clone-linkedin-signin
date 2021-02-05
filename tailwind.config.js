module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
		'./src/**/*.jsx',
		'./src/**/*.js',
	],
  theme: {
    extend: {
			keyframes: {
				goCome: {
					'0%, 100%': { transform: 'translateX(-1rem)' },
					'50%': { transform: 'translateX(13rem)' }
				}
			},
			animation: {
				'go-come': '2s linear infinite goCome'
			}
		},
  },
  variants: {},
  plugins: [],
}
