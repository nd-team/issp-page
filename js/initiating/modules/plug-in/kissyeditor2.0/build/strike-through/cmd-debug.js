KISSY.add('kg/editor-plugins/1.1.2/strike-through/cmd',["editor","../font/cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * strike-through command
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Cmd = require('../font/cmd');

var STRIKE_STYLE = new Editor.Style({
    element: 'del',
    overrides: [
        {
            element: 'span',
            attributes: {
                style: 'text-decoration: line-through;'
            }
        },
        {
            element: 's'
        },
        {
            element: 'strike'
        }
    ]
});
module.exports = {
    init: function (editor) {
        Cmd.addButtonCmd(editor, 'strikeThrough', STRIKE_STYLE);
    }
};
});