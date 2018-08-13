// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    plugins: ['import'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    "settings": {
        "import/parser": "babel-eslint",
        "import/resolver": {
            "webpack": { "config": "static/webpack/webpack.config.js" }
        },
        "import/extensions": ['.js']
    },
    env: {
        browser: true,
        node: true,
        "commonjs": true,
        jquery: true,
    },
    extends: 'airbnb-base',
    // add your custom rules here
    'rules': {
        "indent": [2, 4],
        "no-console": 0, //禁止使用console
        "no-spaced-func": 0, //函数调用时 函数名与()之间不能有空格
        "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
        "func-names": 0, //函数表达式必须有名字
        "arrow-parens": 0, //箭头函数用小括号括起来
        "arrow-spacing": 0, //强制箭头函数的箭头前后使用一致的空格
        "prefer-const": 0, //首选const
        "no-else-return": 0, //如果if语句里面有return,后面不能跟else语句
        "eol-last": 0, //文件以单一的换行符结束
        "no-underscore-dangle": 0, //标识符不能以_开头或结尾
        "no-trailing-spaces": 0, //禁用行尾空格
        "dot-notation": 0, // 强制使用.取属性
        "no-lonely-if": 0, // 禁止 if 作为唯一的语句出现在 else 语句中
        'arrow-body-style': 0,
        'prefer-arrow-callback': 0, // 回调强制使用箭头函数
        'global-require': 0, //要求require出现在顶层作用域
        'import/no-extraneous-dependencies': 0, // 禁止使用无关的包
        'camelcase': 0, // 强制使用驼峰命名
        'no-use-before-define': 0, // 未定义前不可使用
        "func-style": 0, //函数风格，规定只能使用函数声明/函数表达式
        "max-len": [0, 120], //字符串最大长度
        'no-unused-expressions': 0, //禁止无用表达式
        "consistent-return": 0, //return 后面是否允许省略
        'newline-per-chained-call': 0, //要求方法链调用都有一个换行符
        'yoda': 0,
        'prefer-rest-params': 0,
        'import/extensions': [2, 'never']
    },
    globals: {
        GLOBAL_PRIV: false,
    }
};