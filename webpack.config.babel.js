import webpack from 'webpack';
import path from 'path';
import cssnext from 'postcss-cssnext';
import modulesValues from 'postcss-modules-values';
import atImport from 'postcss-import';
import vars from 'postcss-simple-vars';
import mixins from 'postcss-mixins';

export default {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', '.css']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.css$/,
				loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
			}
		]
	},
	postcss: () => [atImport(), mixins, vars, cssnext, modulesValues]
};
