
export const HOST = "";  

export const SetLS = (key, json) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(json));
    } catch(_) {
        alert("本地储存写入错误，若为safari浏览器请关闭无痕模式浏览。");
    }
}
export const GetLS = key => {
    var str = window.localStorage.getItem(key);
    if (str != null && str != "")
        return JSON.parse(str);
    else
        return false;
}
export const ClearLS = key => {
    if (key)
        window.localStorage.removeItem(key);
    else
        window.localStorage.clear();
}
export const SetSessionLS = (key, json) => {
    try {
        window.sessionStorage.setItem(key, JSON.stringify(json));
    } catch(_) {
        alert("本地储存写入错误，若为safari浏览器请关闭无痕模式浏览。");
    }
}
export const GetSessionLS = key => {
    var str = window.sessionStorage.getItem(key);
    if (str != null && str != "")
        return JSON.parse(str);
    else
        return false;
}
export const openWin = (url) => {
    if (url) {
        window.location.href = url;
    }
}
export const replaceWin = (url) => {
    if (url) {
        location.replace(url);
    }
}

export const setTitle = (title) => {
    let sT = function(t) {
        document.title = t;
        let i = document.createElement('iframe');
        i.src = 'http://www.lunzi.online/static/img/logo.cc58945.png';
        i.style.display = 'none';
        i.onload = function() {
            setTimeout(function(){
                i.remove();
            }, 9);
        }
        document.body.appendChild(i);
    }
    setTimeout(function(){
        sT(title);
    }, 100);
}

export const getUrlParam = (key, url) => {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i"), url = url ? (url.split("?")[1]||'') : window.location.href.split("?")[1], r;
    if (url){
        r = url.match(reg);
    }
    return r ? decodeURIComponent(r[2]) : "";
}

export const isPhone = (phone) => {

    return /^1[3456789][0-9]{1}\d{8}$/.test(phone);

}

/* 
* url 目标url 
* arg 需要替换的参数名称 
* arg_val 替换后的参数的值 
* return url 参数替换后的url 
*/ 
export const changeURLArg = (url,arg,arg_val) => { 
    let pattern=arg+'=([^&]*)'; 
    let replaceText=arg+'='+arg_val; 
    if(url.match(pattern)){ 
        let tmp='/('+ arg+'=)([^&]*)/gi'; 
        tmp=url.replace(eval(tmp),replaceText); 
        return tmp; 
    }else{ 
        if(url.match('[\?]')){ 
            return url+'&'+replaceText; 
        }else{ 
            return url+'?'+replaceText; 
        } 
    } 
    return url+'\n'+arg+'\n'+arg_val; 
} 

export const dealURLParam = (obj, url) => {  //url 默认加上 参数
    for (let key in obj){
        sessionStorage[key] = obj[key];
        if (key != "token" && obj[key] != "") {
            if (obj[key] == "undefined"){
                obj[key] = "";
            }
            url = changeURLArg(url, key, obj[key])
        }
    }
    window.history.replaceState(document.title, "", url);
} 


export const changeHash = (key, value) => {  //无刷新改变hash值

    let url = changeURLArg(location.href, key, value)

    window.history.replaceState(document.title, "", url);
}


export const setCookie = (name, value, day) => {
    var Days = day || 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export const getCookie = name => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

/* url */
export const isUrl = url => {

    return /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(url);
}

export const getLocalTime = (ms,day) => {
    if(!ms){
        return "";
    }
    ms = new Date(ms).getTime();
    var _date = new Date(ms);
    var year=_date.getFullYear(),
        month=_date.getMonth()+1,
        date=_date.getDate(),
        hour=_date.getHours(),
        minute=_date.getMinutes(),
        second=_date.getSeconds();
    return year+"-"+(month<10 ? ("0"+month) : month)+"-"+(date<10 ? ("0"+date) : date)+ 
        (!day ? (" "+(hour<10 ? ("0"+hour) : hour)+":"+(minute<10?("0"+minute):minute)+":"+(second<10?("0"+second):second)) : ""); 
}

export const getTime = (time,ms) => {
    if(!time){
        return "";
    }
    time = new Date(time).getTime();
    var _date = new Date(time);
    var hour=_date.getHours(),
        minute=_date.getMinutes(),
        second=_date.getSeconds();
        
    return (hour<10 ? ("0"+hour) : hour)+":"+(minute<10?("0"+minute):minute) + (ms ? (":"+(second<10?("0"+second):second)) : '' ); 
}

export const getDate = (time,ms) => {
    if(!time){
        return "";
    }
    time = new Date(time).getTime();
    var _date = new Date(time);
    var month=_date.getMonth()+1,
        date=_date.getDate();
        
    return (month<10 ? ("0"+month) : month)+"-"+(date<10 ? ("0"+date) : date); 
}

export const getCloseDate = (dateNum) => {
    var minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        halfamonth = day * 15,
        month = day * 30;

    var now = new Date().getTime(),
        diffValue = now - dateNum,
        monthC = diffValue / month,
        weekC = diffValue / (7 * day),
        dayC = diffValue / day,
        hourC = diffValue / hour,
        minC = diffValue / minute,
        result = "";

    if (monthC >= 1) {
        result = parseInt(monthC) + "个月前";
    } else if (weekC >= 1) {
        result = parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = parseInt(minC) + "分钟前";
    } else
        result = "刚刚";

    return result;
}

export const switchUnit = str => {

    
    let num = parseFloat(str) || 0;

    let plusFlag = num >= 0 ? true : false;

    num = Math.abs(num)

    if (num > 0 && num < 1){
        num = num.toFixed(4);
    } else if (num >= 1 && num < 1000){
        num = num.toFixed(2);
    } else if (num >= 1000 && num < 10000){
        num = num.toFixed(2);
    } else if (num >= 10000 && num < 100000){
        num = (num/10000).toFixed(2) + '万';
    } else if (num >= 100000 && num < 1000000){
        num = (num/10000).toFixed(1) + '万';
    } else if (num >= 1000000 && num < 100000000){
        num = (num/10000).toFixed(0) + '万';
    } else if (num >= 100000000 && num < 10000000000){
        num = (num/100000000).toFixed(1) + '亿';
    } else if (num >= 10000000000){
        num = (num/100000000).toFixed(0) + '亿';
    } 
    if (plusFlag == false){
        num = '-' + num;
    }
// console.log(plusFlag, num, str)

    return num;
}

export const switchPrice = str => {

    var num = parseFloat(str) || 0;
    if (num === 0){
        return str;
    }

    if (num > 0 && num < 0.0001){
        num = num.toFixed(8);
    } else if (num >= 0.0001 && num < 0.001){
        num = num.toFixed(7);
    } else if (num >= 0.001 && num < 0.01){
        num = num.toFixed(6);
    } else if (num >= 0.01 && num < 0.1){
        num = num.toFixed(5);
    } else if (num >= 0.1 && num < 100){
        num = num.toFixed(4);
    } else if (num >= 100 && num < 100000000){
        num = num.toFixed(2);
    }

    return num;
}


/* 邮箱 */
export function validatEmail(str) {
    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return reg.test(str)
}

/* 8-12位字母加数字 */
export function validatPassword(str) {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/
    return reg.test(str)
}

/* 6-16位字母加数字 */
export function validat6bPassword(str) {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    return reg.test(str)
}

/* 格式化数字 三位加逗号 */
export function toThousands(num) {

    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

export const jumpRouter = ($route, path) => {
    $route.push({ path: path });
}

export const getAppVersionNum = () => {
    let versionStr = getCookie('app_version');
     if (!!versionStr){
        return versionStr.replace(/\./g, '') - 0
    }
    return 0;
}

export const getLength = (str) => {
    var len = str.length;
    var reLen = 0;
    for (var i = 0; i < len; i++) {       
        if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) {
            // 全角   
            reLen += 2;
        } else {
            reLen++;
        }
    }
    return reLen;
}

export const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

