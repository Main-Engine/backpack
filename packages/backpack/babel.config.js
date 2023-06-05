const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = (api) => {
	api.cache(true)
	return {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src/'],
					alias: {
						'@backpack': path.join(root, '..', 'packages/backpack/src'),
					},
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				},
			],
			[
				'babel-plugin-styled-components',
				{
					meaninglessFileNames: ['index', 'styles'],
				},
			],
			'@babel/plugin-proposal-export-namespace-from',
		],
	}
}
