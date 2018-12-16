module.exports = {
	baseUrl: './',
	outputDir: 'dist',
	assetsDir: '',
	devServer: {
		port:8989,
		proxy: {
			'/api': {
				target: "http://www.uixkid.com",
				changeOrigin: true,
				ws: true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	},

}