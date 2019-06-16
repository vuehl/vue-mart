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

                app.post("/api/loginout", function(req, res) {
                    res.json({
                        code: "-1",
                        messages: "退出成功"
                    });
                });
            }
        }
    }
};
