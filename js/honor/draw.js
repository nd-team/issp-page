/**
 * Created by ike on 2017/3/23.
 */
    scale = function (btn, bar, title) {
    this.btn = document.getElementById(btn);
    this.bar = document.getElementById(bar);
    this.title = document.getElementById(title);
    this.step = this.bar.getElementsByTagName("DIV")[0];
    this.init();
};
    scale.prototype = {
    init: function () {
    var f = this, g = document, b = window, m = Math;
    f.btn.onmousedown = function (e) {
    var x = (e || b.event).clientX;
    var l = this.offsetLeft;
    var max = f.bar.offsetWidth - this.offsetWidth;
    g.onmousemove = function (e) {
    var thisX = (e || b.event).clientX;
    var to = m.min(max, m.max(-2, l + (thisX - x)));
    f.btn.style.left = to +8+ 'px';
    f.title.style.left = to +8+ 'px';
    f.ondrag(m.round(m.max(0, to / max) * 100), to);
    b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
};
    g.onmouseup = new Function('this.onmousemove=null');
};
},
    ondrag: function (pos, x) {
    this.step.style.width = Math.max(0, x) +8+ 'px';
    this.title.innerHTML = '当前等级:'+pos;
}
};
    new scale('btn0', 'bar0', 'title0');
    new scale('btn1', 'bar1', 'title1');
