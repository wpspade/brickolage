/**
 * Webpack Configuration
 *
 * @since 1.0.0
 */

const fs = require( "fs" );
const path = require( "path" );
const externals = require( "./externals" );
const autoprefixer = require( "autoprefixer" );
const UglifyJsPlugin = require( "uglifyjs-webpack-plugin" );
const miniCssExtractPlugin 	= require( "mini-css-extract-plugin" );
const optimizeCssAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );

const pluginDir = fs.realpathSync( process.cwd() );
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath );

const config = ( env, argv ) => ( {

	devtool: argv.mode !== "production" ? "eval" : false,

	entry: {
		"brickolage.build": resolvePlugin( "src/index.js" ),
	},

	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: false,
		// The dist folder.
		path: resolvePlugin( "dist" ),
		filename: "[name].js", // [name] = "./dist/brickolage.build" as defined above.

		// `library` determines the name of the global variable
		libraryTarget: "var",
		library: "Brickolage",
		libraryExport: "default"
	},

	watch: argv.mode === "development",

	watchOptions: {
		ignored: /node_modules/
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true,
					},
				},
			},

			{
				test: /\.scss$/,
				exclude: /vendor/,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
						options: {
							importLoaders: 2
						},
					},

					"css-loader",

					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: [
								autoprefixer( {
									flexbox: "no-2009",
								} ),
							]
						},
					},
					
					{
						loader: "sass-loader",
					},
				]
			}
		],
	},
	// Add plugins.
	plugins: [

		new miniCssExtractPlugin( {
			filename: "./brickolage.build.css"
		} ),

		new optimizeCssAssetsPlugin( {
			filename: "./brickolage.build.css"
		} ),
	],

	optimization: {
		minimizer: [
			// Minify the code.
			new UglifyJsPlugin( {
				cache: true,
				parallel: true,
				uglifyOptions: {
					extractComments: true,
					output: {
						comments: /^\**!|@preserve|@license|@cc_on/i,
						ascii_only: true,
					}
				},
			} ),

			new optimizeCssAssetsPlugin( {
				assetNameRegExp: /\.optimize\.css$/g,
				cssProcessor: require( "cssnano" ),
				cssProcessorPluginOptions: {
					preset: [
						"default", {
							discardComments: {
								removeAll: true
							}
						}
					],
				},
				canPrint: true
			} ),
		]
	},

	stats: "minimal",

	// Add externals.
	externals,
} );

// Export configuration.

module.exports = config;