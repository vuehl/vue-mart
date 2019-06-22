module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        // 这个是防止 delete cr报错
        "prettier/prettier": "off",
        "quotes": ["warn", "double"],
        "semi": ["warn", "always"],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        "vue/max-attributes-per-line": [
            4,
            {
                singleline: 10,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        "vue/html-self-closing": "off",
        "vue/name-property-casing": ["error", "PascalCase"],
        // allow async-await
        "generator-star-spacing": "off",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        // 关闭检测函数名称和调用它的左括号之间的空格
        //"func-call-spacing": 'off',
        // 缩进为2个空格
        "indent": ["error", 4],
        // 关闭检测未使用的变量
        "no-unused-vars": "off",
        // 对象展开时总是要添加逗号，一行时行末不需要逗号
        // 'comma-dangle': ['error', 'always-multiline'],
        // 定义函数时，函数括号之前允许添加空格
        //"space-before-function-paren": ["error", "always"],
        // 关闭禁用无效标签
        "no-tabs": "off",
        // 关闭空行检测
        "no-multiple-empty-lines": "off",
        // 关闭模板字符串检测
        "no-template-curly-in-string": "off",
        "no-console": "off",
    },
    parserOptions: {
        parser: "babel-eslint",
    },
};
