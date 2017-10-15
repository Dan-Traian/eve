if (!window.screenTop && !window.screenY) {
    console.log('Browser is in fullscreen');
}

(function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    today="";
    if(s%2==0){
        today =h + " " + m;
    }
    else{
        today =h + ":" + m;
    }
    document.getElementById('utilities_time').innerHTML =today;
    var t = setTimeout(startTime,1000);
})();
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
