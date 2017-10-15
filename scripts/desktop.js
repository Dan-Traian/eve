
//  desktop  apps draggable
$( ".desktop_app" ).draggable(
    { 
        grid: [ 1,1 ],
        containment: "#desktop",
    });
// click on desktop icons

$(".desktop_app").click(function(){
    $(".desktop_app").removeClass("desktop_app_focus");
    $(this).addClass("desktop_app_focus");

    if($(this).hasClass("wifi_img") && $(".file_01").css("display") == "none"){
        console.log("show wifi hint");
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
function show_terminal_login(){
    console.log("animate intro");
    $("#glitch").css("display","none");
    $("#terminal_preloader").css("display","flex");
    $("#terminal_login").css("display","none");
    new TimelineMax()
        .delay(1)
        .to($("#terminal_preloader"), 1 ,{opacity:1})
        .delay(1)
        .to($("#terminal_preloader .container .bar"), 4,{ease: Power2.easeInOut,left:0})
        .delay(1)
        .fromTo($("#terminal_preloader"), 0.5, {opacity:1}, {opacity:0})
        .addCallback(function(){
            $("#terminal_preloader").css("display","none");
            $("#terminal_login").css("display","flex");
        })
        .fromTo($(" #terminal_login"), 1,{opacity:0},{opacity:1})
        // .addCallback(show_instructions,"+=2")
        .timeScale(1);
}
$("#glitch span").click(show_terminal_login);

 
$(document).keypress(function(e) {
    if(e.which == 13) {
        console.log('You pressed enter!');
        if($("#login_input").is(":focus")){
            var pass = $("#login_input").val();
            if(pass == "pass1234"){
                rivescript.style.display="flex";
                new TimelineMax()
                    .fromTo($("#terminal_login"), 1,{opacity:1},{opacity:0})
                    .fromTo($("#rivescript"), 1,{opacity:0},{opacity:1})
                    .addCallback(function(){
                        $("#terminal_login").css("display","none");
                    })
                    .timeScale(1);
            }
            else{
                $("#glitch").css("display","flex");
                $("#terminal_login").css("display","none");
                var static_error = new Audio("../media/static_02.mp3");
                static_error.volume=0.3;
                static_error.play();
            }
        }
        if($("#rivescript_input").is(":focus")){
            addReply();
        }

    }
});
var reply_counter = 0;
function addReply(){
    // console.log("i am inputing the passworkd");
    var user_input = $("#rivescript_input").val();
    $("#rivescript_input").val("");
    $("#rivescript_input").focus();

    // console.log(pass);
    var reply = bot.reply("local-user", user_input);

    reply_counter++;
    var q = `
        <div class="conv_element">
        <div class="index">`+reply_counter+`</div>
        <span>You</span>
        <div class="content">
            <p>`+user_input+`</p>
        </div>
    </div>`;
    reply_counter++;
    var r = `
        <div class="conv_element">
        <div class="index">`+reply_counter+`</div>
        <span>EVE</span>
        <div class="content">
            <p></p>
        </div>
    </div>`;    
    console.log(conversation);
    conversation.insertAdjacentHTML("beforeend",q);
    conversation.insertAdjacentHTML("beforeend",r);
    var index = 0;
    conversation.scrollTop += 100;


    var letter = setInterval(function(){
   
        if(index<reply.length){
            conversation.querySelector(".conv_element:last-child .content p").innerHTML+=reply.charAt(index);
        }
        else{
            clearInterval(letter);
        }
        index++;
    },50);
    
    // setTimeout(function() {
    //     conversation.querySelector(".conv_element:last-child .content p").innerHTML="..";
    //     setTimeout(function() {
            
    //         conversation.querySelector(".conv_element:last-child .content p").innerHTML="...";
    //         setTimeout(function() {
    //             conversation.querySelector(".conv_element:last-child .content p").innerHTML=reply;
    //         }, 1000);
    //     }, 1000);
    // }, 1000);
}

// for testing purposes;
$("#terminal").css("display","block");
terminal_preloader.style.display="none";
terminal_login.style.display="none";
rivescript.style.display="block";
rivescript.style.opacity=1;

// show_lorn();

function show_lorn(){
    // var is_loaded= false;
    // lorn_video.addEventListener('loadedmetadata', function() {
    //     is_loaded=true;
    // }, false);
    console.log("i called lorn");


    $("#desktop_container").addClass("show_lorn");
    $("#lorn_container").css("display","block");


    this.currentTime = 90;
    lorn_video.volume=0;    
    lorn_video.play();

    $(lorn_video).animate({volume: 0.5}, 50000);
    
    new TimelineMax()
        .delay(17)
        .fromTo($("#lorn_container .screen"), 1 ,{opacity:0},{opacity:1})
        .fromTo($("#lorn_video"),3,{opacity:0},{opacity:1},"+=6")
        // .addCallback(show_instructions,"+=2")
        .timeScale(1);

};
