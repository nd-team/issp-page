KISSY.add('kg/editor-plugins/1.1.2/remove-format',["editor","./button","./remove-format/cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * removeFormat for selection.
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
require('./button');
var formatCmd = require('./remove-format/cmd');

function RemoveFormat() {
}

RemoveFormat.prototype = {
    pluginRenderUI: function (editor) {
        formatCmd.init(editor);
        editor.addButton('removeFormat', {
            tooltip: '清除格式',
            listeners: {
                click: function () {
                    editor.execCommand('removeFormat');
                }
            },
            mode: Editor.Mode.WYSIWYG_MODE
        });
    }
};

module.exports = RemoveFormat;

});