module.exports = {
	baseUrl: '/assets/',
	outputDir: 'dist',
	assetsDir: 'happyidiom/',
	devServer: {
		port:8989,

	}
}

// module.exports = {
//   baseUrl: './',
//   outputDir: 'dist',
//   assetsDir: '',
//   devServer: {
//     port:8787,
//     proxy: {
//       '/api': {
//         target: "http://192.168.0.179:8090",
//         changeOrigin: true,
//         ws: true,
//         pathRewrite:{
//           '^/api': ''
//         }
//       }
//     }
//   },
// }