# jquery-cli

    $cd ~/jquery-cli

    $npm install

    $npm run dev

    // 生产环境构建
    $npm run release

# 项目结构
    .
    |- mock
    |- src
        |- main.js  // 主入口文件
        |- router   // 路由
            |- router.js
        |- common   // 公共工具
        |- modules  //业务模块
            |- ...
        |- components   // 公共业务组件
    |- static
        |- config
        |- img
        |- lib
        |- ...
    |- package.json
    |- .babelrc
    |- postcss.config.js

# 技术栈 
### jquery
### [History.js](https://github.com/browserstate/history.js)
### [Page.js](https://github.com/visionmedia/page.js)
### axios
### art-Template

# 设计思路

该项目目前只适用于pwa项目。
