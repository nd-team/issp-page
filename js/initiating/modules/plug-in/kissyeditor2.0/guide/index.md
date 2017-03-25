## 综述

editor-plugins 是 KISSY Editor 的插件集合，涵盖了大部分日常使用的插件，例如 font-family , image , indent 等插件。KISSY@5.0+将 KISSY Editor 核心代码和 KISSY 代码放在一起，而 editor-plugins 则放在 gallery 上。

* 版本：1.1.2
* 作者：承玉、秋知
* demo：[http://gallery.kissyui.com/editor-plugins/doc/demo/index.html](http://gallery.kissyui.com/editor-plugins/doc/demo/index.html)

## 使用组件

使用前先引入editor-plugins的模块依赖表，避免模块串行加载，优化性能。`http://g.tbcdn.cn/kg/editor-plugins/1.1.2/mods.js`

	KISSY.use('node,editor,kg/editor-plugins/1.1.2/font-size,kg/editor-plugins/1.1.2/source-area,kg/editor-plugins/1.1.2/image', function(S, Node, Editor, FontSize, SourceArea, Image){
		var myEditor = new Editor({
			focused : true,
			attachForm : true,
			render : '#editorContainer',
			width : '500px',
			height : '500px',
			plugins : [
				FontSize,
				SourceArea,
				new Image({
					upload : {
						serverUrl: 'http://youurl.php',
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
				})
			]
		});
	})

## API说明

Editor的API 和 editor-plugins 插件集合的API文档地址： 

[KISSY Editor API](http://docs.kissyui.com/5.0/api/classes/Editor.html)

[editor-plugins APIs](http://gallery.kissyui.com/editor-plugins/doc/guide/api/index.html)