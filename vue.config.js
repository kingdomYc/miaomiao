// module.exports = {
//     devServer:{
//         proxy:{
//             '/api':{
//                 target:'http://39.97.33.178',
//                 changeOrigin:true,
//                 pathRewrite : {
//                     '^/api': ''
//                 }
//             }
//         }
//     }
// }
//const proxy = require('http-proxy-middleware');
module.exports = {
    devServer : {
        proxy : {
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true,
            },
        }
    }
}