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

function move(obj,json,time,fn) {
    clearInterval(obj.timer);
    var start = {};
    var dis = {};
    for(var name in json){
        start[name] = parseFloat(getStyle(obj, name));
        dis[name] = json[name] - start[name];
    }
    var count = Math.floor(time / 30);
    var n = 0;
    obj.timer = setInterval(function () {
        n++;
        for(var name in json){
            var cur = start[name] + n * dis[name] / count;
            if (name == 'opacity') {
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:' + cur * 100 + ')';
            } else {
                obj.style[name] = cur + 'px';
            }
        }
        if (n == count) {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 30);
}
