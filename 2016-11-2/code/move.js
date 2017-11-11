/**
 * Created by Administrator on 2016/11/2.
 */
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function move(obj, iTarget, time, name, fn) {
    clearInterval(obj.timer);
    var start = parseFloat(getStyle(obj, name));
    var dis = iTarget - start;
    var count = Math.floor(time / 30);
    var n = 0;
    obj.timer = setInterval(function () {
        n++;
        var cur = start + n * dis / count;
        if (name == 'opacity') {
            obj.style.opacity = cur;
            obj.style.filter = 'alpha(opacity:' + cur * 100 + ')';
        } else {
            obj.style[name] = cur + 'px';
        }
        if (n == count) {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 30);
}
