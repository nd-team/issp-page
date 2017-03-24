# editor-plugins

plugins of kissy editor

## example

````
gulp server
```

open http://localhost:8001/demo/index.html


## 构建

```
cd editor-plugins
npm install
gulp
```

-----------------------------------

构建工具使用[gulp-kmc](https://github.com/hustxiaoc/gulp-kmc)来构建js，[joycss](https://github.com/shepherdwind/joycss)来构建less，[joycss](https://github.com/shepherdwind/joycss)依赖 pngquant 和 optipng 两个图形库，OSX系统需要手动安装这两个依赖，Window系统则已经包含了不需要手动安装；此外需要保证操作系统有php运行环境，将php加到环境变量里面。具体请看[joycss文档](https://github.com/shepherdwind/joycss/wiki/how-to-install)
