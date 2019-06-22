let bodyParser = require("body-parser");

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                "resolve url": true,
                "import": ["./src/theme"]
            }
        }
    },
    pluginOptions: {
        "cube-ui": {
            postCompile: true,
            theme: true
        }
    },
    configureWebpack: {
        devServer: {
            before(app) {
                // parse application/x-www-form-urlencoded
                app.use(bodyParser.urlencoded({ extended: false }));

                // parse application/json
                app.use(bodyParser.json());
                // 中间件 来判断一下路由的请求
                app.use(function(req, res, next) {
                    if (/^\/api/.test(req.path)) {
                        if (req.path === "/api/login" || req.headers.token) {
                            next();
                        } else {
                            /* 提示状态 用户需要登录 */
                            res.sendStatus(401);
                        }
                    } else {
                        next();
                    }
                });
                app.get("/api/test", function(req, res) {
                    res.json({
                        code: 0,
                        list: []
                    });
                });

                app.post("/api/login", function(req, res) {
                    const { username, password } = req.body;
                    if (username === "littleBee" && password === "123456") {
                        res.json({
                            code: "00000000",
                            token: "DESCRIPTIONTOKEN",
                            messages: "success"
                        });
                    } else {
                        res.json({
                            code: "20150001",
                            messages: "用户名或密码错误"
                        });
                    }
                });

<<<<<<< HEAD
                app.post("/api/logout", function(req, res) {
=======
                app.post("/api/loginout", function(req, res) {
                    // 如果没有 body-parser post是数据流传输过来的
                    // let body = [];
                    // req.on("data", chunk => {
                    //     // 接受一部分数据
                    //     console.log(chunk);
                    //     body.push(chunk);  // chunk 是Buffer对象
                    // }).on("end", ()=> {
                    //     // 数据接受完毕
                    //     // 将body 转化为完整的buffer
                    //     body = Buffer.concat(body).toString();
                    //     // 转化保存前台的user
                    //     const { username, password } = JSON.parse(body);  // {name: "aaa", age: 20}
                    // });

>>>>>>> 9cbe1441001fc567a1bc0c6992d6557e36a5da96
                    res.json({
                        code: "-1",
                        messages: "退出成功"
                    });
                });
            }
        }
    }
};
