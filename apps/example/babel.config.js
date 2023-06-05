const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = (api) => {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@backpack': path.join(root, '..', 'packages/backpack/src'),
					},
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				},
			],
		],
	}
}
