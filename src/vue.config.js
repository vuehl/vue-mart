// module.exports = {
//     configureWebpack: {
//         devServer: {
//             before(app) {
//                 app.get("/api/login", function(req, res) {
//                     const { username, password } = req.query;
//                     if (username === "littleBee" && password === "123456") {
//                         res.json({
//                             code: "00000000",
//                             token: "DESCRIPTIONTOKEN",
//                             messages: "success"
//                         });
//                     } else {
//                         res.json({
//                             code: "20150001",
//                             messages: "用户名或密码错误"
//                         });
//                     }
//                 });
//             }
//         }
//     }
// };
