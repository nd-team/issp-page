KISSY.add('kg/editor-plugins/1.1.2/back-color',["./color/btn","./back-color/cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * backColor button.
 * @author yiminghe@gmail.com
 */

var Button = require('./color/btn');
var cmd = require('./back-color/cmd');

function BackColor(config) {
    this.config = config || {};
}

BackColor.prototype = {
    pluginRenderUI: function (editor) {
        cmd.init(editor);
        Button.init(editor, {
            defaultColor: 'rgb(255, 217, 102)',
            cmdType: 'backColor',
            tooltip: '背景颜色'
        });
    }
};

module.exports = BackColor;
});