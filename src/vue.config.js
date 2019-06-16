module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get("/api/test", function (req, res) {
                    res.json({
                        code: 0,
                        list: [{
                                id: 1,
                                name: "王东刚"
                            },
                            {
                                id: 2,
                                name: "彭宇"
                            }
                        ]
                    });
                })
            }
        }
    }
}