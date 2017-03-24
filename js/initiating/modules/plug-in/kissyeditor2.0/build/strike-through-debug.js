KISSY.add('kg/editor-plugins/1.1.2/strike-through',["./font/ui","./strike-through/cmd","./button"],function(S ,require, exports, module) {
/**
 * @ignore
 * strikeThrough button
 * @author yiminghe@gmail.com
 */

var ui = require('./font/ui');
var cmd = require('./strike-through/cmd');
require('./button');
function StrikeThrough() {
}

StrikeThrough.prototype = {
    pluginRenderUI: function (editor) {
        cmd.init(editor);
        editor.addButton('strikeThrough', {
            cmdType: 'strikeThrough',
            tooltip: '删除线'
        }, ui.Button);
    }
};

module.exports = StrikeThrough;
});