KISSY.use('util, node', function (S, util, Node) {
    /*jshint quotmark:false*/
    var cfg = util.mix({
        // 是否初始聚焦
        focused: true,
        attachForm: true,
        baseZIndex: 10000
    }, window.EDITOR_CFG);
    var plugins = (
        "font-size," + //字体大小
        "font-family," +//字体
        "bold," +    //加粗
        "italic," +
        "underline," +
        "strike-through," +
        //"separator," + //左横线
        "checkbox-source-area" +
        ",fore-color" + //字体颜色
        ",back-color" + //背景色
        // ",resize" +
        // ",draft" +   //页面下面字体(五分钟保存一次)
        ",element-path" + //body p
        ",page-break" + //分页
        ",preview" + //预览
        ",maximize" + //全屏
        ",remove-format" + //清除格式
        ",heading" + //普通文本
        ",justify-left" +  //左对齐
        ",justify-center" + //居中对齐
        ",justify-right" + //右对齐
        ",table" +  //插入表格
        ",smiley" +  //插入表情
       ",unordered-list" + //设置无序列表
       ",ordered-list" +  //设置有序列表
        ",outdent" + //减少缩进量
        ",indent" + //增加缩进量
       ",separator" +  //右边线
       ",link" + //插入链接
       ",source-area" + //编辑源代码
       //",code" +    //c语言图标
       ",separator" +  //右边线
        ",undo" + //撤销
        ",image" + //插入图片
        ",flash" + // 插入flash
        ",xiami-music" +  //插入音乐
        ",video" +  // 插入视频
        ",drag-upload").split(",");
    var fullPlugins = [];
    util.each(plugins, function (p, i) {
        fullPlugins[i] = "kg/editor-plugins/" + window.EDITOR_VERSION + '/' + p;
    });
    var pluginConfig = {
        link: {
            target: "_blank"
        },
        'image': {
            defaultMargin: 0,
            //remote:false,
            upload: {
                serverUrl: window.UPLOAD_SINGLE_URL || "upload.js",  //ddd
                serverParams: {
                    waterMark: function () {
                        return Node.one("#ke_img_up_watermark_1")[0].checked;
                    }
                },
                suffix: "png,jpg,jpeg,gif",
                fileInput: "Filedata",
                sizeLimit: 1000, //k
                extraHTML: "<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> 图片加水印，防止别人盗用</p>"
            }
        },
        'flash': {
            "defaultWidth": "300",
            "defaultHeight": "300"
        },
        "font-size": {
            matchElWidth: false,
            menu: {
                children: [
                    {
                        value: "12px",
                       // textContent: "标准",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "<span style='padding-left: 15px'>12px</span>"
                      //  content: " <span style='font-size:14px'>标准</span>" +
                           // "<span style='position:absolute;top:1px;right:3px;'>14px</span>"
                    },
                    {
                        value: "16px",
                      //  textContent: "大",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "<span style='padding-left: 15px'>16px</span>"
                      //  content: "" +
                          //  " <span style='font-size:16px'>大</span>" +
                          //  "<span style='position:absolute;top:1px;right:3px;'>16px</span>"
                    },
                    {
                        value: "18px",
                       // textContent: "特大",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "<span style='padding-left: 15px'>18px</span>"
                       // content: "" +
                           // " <span style='font-size:18px'>特大</span>" +
                           // "<span style='position:absolute;top:1px;right:3px;'>18px</span>"
                    },
                    {
                        value: "20px",
                       // textContent: "极大",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "<span style='padding-left: 15px'>20px</span>"
                        //content: "" +
                          //  " <span style='font-size:20px'>极大</span>" +
                           // "<span style='position:absolute;top:1px;right:3px;'>20px</span>"
                    }
                ],
                width: "70px"
            }
        },
        "video": {
            urlCfg: [
                {
                    reg: /tudou\.com/i,
                    url: "http://bangpai.taobao.com/json/getTudouVideo.htm",
                    paramName: "url"
                }
            ],
            "urlTip": "请输入优酷网、土豆网、酷7网的视频播放页链接...",
            "providers": [
                {
                    // 允许白名单
                    reg: /taohua\.com/i,
                    //默认高宽
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        return url;
                    }
                },
                {
                    reg: /youku\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        var m = url.match(/id_([^.]+)\.html(\?[^?]+)?$/);
                        if (m) {
                            return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                        }
                        m = url.match(/v_playlist\/([^.]+)\.html$/);
                        if (m) {
                            return;
                            //return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                        }
                        return url;
                    }
                },
                {
                    reg: /tudou\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        return url;
                    }
                },
                {
                    reg: /ku6\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        var m = url.match(/show[^\/]*\/([^\/]+)\.html(\?[^?]+)?$/);
                        if (m) {
                            return "http://player.ku6.com/refer/" + m[1] + "/v.swf";
                        }
                        return url;
                    }
                }
            ]
        },
        "draft": {      // 页面下面字体
            interval: 5,
            limit: 10,
            "helpHtml": "<div " +
                "style='width:200px;'>" +
                "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" +
                "如果发现内容丢失，" +
                "请选择恢复编辑历史</div></div>"
        },
        "resize": {
            direction:['x']
        },
        "drag-upload": {
            suffix: "png,jpg,jpeg,gif",
            fileInput: "Filedata",
            sizeLimit: 1000,
            serverUrl: "upload.jss",
            serverParams: {
                waterMark: function () {
                    return true;
                }
            }
        }
    };
    S.use(['editor'].concat(fullPlugins), function (S, Editor) {
        var args = util.makeArray(arguments);
        args.shift();
        args.shift();
        util.each(args, function (Arg, i) {
            var argStr = plugins[i],
                cfg = pluginConfig[argStr];
            if (cfg) {
                args[i] = new Arg(cfg);
            }
        });
        cfg.plugins = args;
        var editor;
        if (cfg.fromTextarea) {
            editor = Editor.decorate(cfg.fromTextarea, cfg);
        } else {
            editor = new Editor(cfg);
            editor.render();
        }
        editor.on('blur', function () {
            S.log("editor blur");
        });
        editor.on('focus', function () {
            S.log("editor focus");
        });
        editor.on('selectionChange', function (e) {
            S.log("selectionChange : " + e.path.toString());
        });
        window.newEditor = editor;
    });
});