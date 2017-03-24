KISSY.add('kg/editor-plugins/1.1.2/overlay',["editor","overlay","./focus-fix"],function(S ,require, exports, module) {
/**
 * @ignore
 * custom overlay  for kissy editor
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Overlay = require('overlay');
var focusFix = require('./focus-fix');

module.exports = Overlay.extend({
    bindUI: function () {
        focusFix.init(this);
    }
}, {
    ATTRS: {
        prefixCls: {
            value: 'ks-editor-'
        },
        'zIndex': {
            value: Editor.baseZIndex(Editor.ZIndexManager.OVERLAY)
        }
    }
});

});