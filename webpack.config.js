module.exports = {
	entry: {
		javascript:  "./app/app.js",
		html: "./app/index.html"
	},

	output: {
		filename: "./app.js",
		path: __dirname + "/dist",
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}, 
	module: {
		loaders:[
				{
					test: /\.jsx?$/,         // Match both .js and .jsx files
					exclude: /node_modules/, 
					loader: "babel-loader"
				},
				{
				  test: /\.html$/,
				  loader: "file?name=[name].[ext]"
				}
			]
			
	}
}