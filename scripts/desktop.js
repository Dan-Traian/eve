
//  desktop  apps draggable
$( ".desktop_app" ).draggable(
    { 
        grid: [ 1,1 ],
        containment: "#desktop",
    });


// click on desktop icons


var desktop_apps=document.querySelectorAll(".desktop_app");
for(var i=0;i<desktop_apps.length;i++){
    desktop_apps[i].addEventListener("click",function(){
    	console.log("X");
    	$(".desktop_app").removeClass("desktop_app_focus");
        this.classList.add("desktop_app_focus");


        if($(this).hasClass("wifi_img") && $(".file_01").css("display") == "none"){
            console.log("show wifi");
            $(".file_01").css("display","block");
            var s_icon_app='<div class="icon icon_app active" data-target-file="file_01"><i class="ion-android-image"></i></div>';
            document.querySelector("#desktop_bar .icons").insertAdjacentHTML("beforeend", s_icon_app);

            // add event listenr to last app added

            $("#desktop_bar .icons .icon:last-child").click(function(){
                // add active class
                this.classList.add("active");
                // get file target from data_target_file
                var s_data_target_file = this.getAttribute("data-target-file");
                var s_file_selector = "[data-target-icon='"+s_data_target_file+"']";
                var target_file = document.querySelector(s_file_selector);
                // console.log(target_file);
                
                // display the target file
                target_file.style.display="block";
            });
        }
        if($(this).hasClass("terminal_app")){
            console.log("show terminal");
            $("#terminal").css("display","block");
            show_terminal_login();
        }
    });

    
}



function show_terminal_login(){
    console.log("animate intro");
    new TimelineMax()
        .delay(1)
        .to($("#terminal_preloader"), 1 ,{opacity:1})
        .delay(1)
        .to($("#terminal_preloader .container .bar"), 4,{ease: Power2.easeInOut,left:0})
        .delay(1)
        .fromTo($("#terminal_preloader .container"), 0.5, {opacity:1}, {opacity:0})
        .fromTo($("#login_logo"), 3, {opacity:0}, {opacity:1})
        .to($("#login_logo"), 1,{opacity:0})
        .to($("#login_logo"), 0.1, {top:0})
        .fromTo($("#login_input"), 0.5, {opacity:0}, {opacity:1})
        .to($("#login_logo"), 1,{opacity:1})

        .staggerFromTo($("#terminal_login p"), 0.5, {opacity:0}, {opacity:1},0.3)
        // .addCallback(show_instructions,"+=2")
        .timeScale(1);
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