module.exports = {
	baseUrl: '/',
	devServer: {
		port:8989,
		proxy: {
			'/api': {
				target: "http://192.168.0.179:8080/imooc",
				changeOrigin: true,
				ws: true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	},

}