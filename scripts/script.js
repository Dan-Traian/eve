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


$("body").contextmenu(function(e){
    e.preventDefault(); 

    var left= e.pageX;
    var top = e.pageY;
    right_click_menu.style.display="block";
    // console.log(e.pageX , right_click_menu.offsetWidth , window.innerWidth)
    if(e.pageX + right_click_menu.offsetWidth > window.innerWidth){
        left = window.innerWidth -right_click_menu.offsetWidth - 5 ; 
    }
    // console.log(e.pageY , right_click_menu.offsetHeight , window.innerHeight)
    if(e.pageY + right_click_menu.offsetHeight > window.innerHeight){
        top = window.innerHeight - right_click_menu.offsetHeight - 5 - desktop_bar.offsetHeight;
    }
    
    right_click_menu.style.top=top+"px";
    right_click_menu.style.left=left+"px";
    
    
    right_click_menu.style.opacity="0";
    $("#right_click_menu").animate({opacity:1},300);
});
$("body").mousedown(function(e){
    right_click_menu.style.display="none";
});


// vaporwave course
var horzs = vaporwave.querySelectorAll(".horz");
var speed = 1;
var max_height = $("#vaporwave .container").height();
setInterval(function(){
    for(var i=0;i<horzs.length;i++){
        var current_top = horzs[i].offsetTop;
        console.log(current_top);
        current_top+=speed;
        if(current_top>max_height){
            current_top=0;
        }
        horzs[i].style.top = current_top+"px";

    }
    // console.log(1);
},100)