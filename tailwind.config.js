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
				},
				goUp: {
					from: { transform: 'translateY(100px)'},
					to: { transform: 'translateY(0)'}
				},
				goDown: {
					from: { transform: 'translateY(-45px)'},
					to: { transform: 'translateY(0)'}
				}
			},
			animation: {
				'go-come': '2s linear infinite goCome',
				'goup': '.5s linear goUp',
				'godown': '.5s linear goDown',

			}
		},
  },
  variants: {},
  plugins: [],
}
