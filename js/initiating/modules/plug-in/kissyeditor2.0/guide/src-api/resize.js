/**
@module resize
*/

/**
编辑器的调整大小插件
@class Resize
@constructor
@param config {Object}
@example
	KISSY.use('editor,kg/editor-plugins/当前版本号/resize', function(S, Editor, Resize){
		var editor = new Editor({
			render : '#container',
			plugins : [
				new Resize({
					direction : ["x"]  //表示只能在x轴方向拉伸，["x", "y"]则表示任意方向拉伸
				})
			]
		})
	})
*/

/**
右下角调整大小的配置
@attribute direction {String[]}
*/

/**
调整开始时触发
@event resizeStart
*/

/**
调整过程中周期触发
@event resize
*/