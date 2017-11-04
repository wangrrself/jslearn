/**
 * Created by ZhaoShuai on 2016/10/31.
 * QQ&&WeChat: 1812532016
 */
function addEvent(obj,sEv,fn){
    if(obj.addEventListener){
        return obj.addEventListener(sEv,fn,false);
    }else{
        return obj.attachEvent('on' + sEv,fn);
    }
}
function addWheel(obj,fn){
    function wheel(ev){
        var oEvent = ev || event;
        var bDown = true;
        bDown = oEvent.wheelDelta ? oEvent.wheelDelta > 0:oEvent.detail < 0;
        fn && fn(bDown);
        oEvent.preventDefault && oEvent.preventDefault();
        return false;
    }
    if(window.navigator.userAgent.toLocaleLowerCase().indexOf('firefox')!= -1){
        obj.addEventListener('DOMMouseScroll',wheel,false);
    }else{
        addEvent(obj,'mousewheel',wheel);
    }
}
