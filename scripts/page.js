// map of scripts

// 1. page - > header functionalities
// 2. random positioning of maps
// 3. page draggable






// expand windows : from small to fullscreen
var btn_maximize=document.querySelectorAll(".btn_expand");

for(var i=0;i<btn_maximize.length;i++){
	btn_maximize[i].addEventListener("click",function(){
		this.parentNode.parentNode.parentNode.classList.add("page_fullscreen");
		this.parentNode.parentNode.parentNode.removeAttribute("style");

	});
}

// minify windows: file to be hidden, but still open in the desktop bar
var btn_minify=document.querySelectorAll(".btn_minify");

for(var i=0;i<btn_minify.length;i++){
	btn_minify[i].addEventListener("click",function(){

		// keep fullscreen if exist



		// get file target from data_target_file
		var s_data_target_icon = this.parentNode.parentNode.parentNode.getAttribute("data-target-icon");
		var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
		var target_icon = document.querySelector(s_icon_selector);
		// modify the icon in the desktop bar
		// console.log(target_icon);
		target_icon.classList.remove("active");


		/*

		var viewportOffset = target_icon.getBoundingClientRect();
		// these are relative to the viewport, i.e. the window
		var posTop = viewportOffset.top +100;
		var posLeft = viewportOffset.left;
		console.log(posTop,posLeft);
				$(this).parent().parent().parent().animate({
			top:posTop, left:posLeft,opacity:0,width:0
		},400);


		//  find a fix for reversing the animation

		*/
		//  add display none -aka minify the page
		this.parentNode.parentNode.parentNode.style.display="none";
		



	});
}
// maximize windows
var icon_maximize=document.querySelectorAll(".icon_app");

for(var i=0;i<icon_maximize.length;i++){
	icon_maximize[i].addEventListener("click",function(){

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


// close windows
var btn_close=document.querySelectorAll(".btn_close");

for(var i=0;i<btn_close.length;i++){
	btn_close[i].addEventListener("click",function(){
		this.parentNode.parentNode.parentNode.style.display="none";

		var s_data_target_icon = this.parentNode.parentNode.parentNode.getAttribute("data-target-icon");
		var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
		var target_icon = document.querySelector(s_icon_selector);
		// remove the icon in the desktop bar
		target_icon.remove();
	});
}
// bring focused page on the front
$(".page").click(function(){
	$(".page").css("z-index", "5").removeClass("page_focus");

	$(this).css("z-index", "10").addClass("page_focus");
});


// add coresponding icon in the desktop bar 




//  jquery draggable
$( ".page" ).draggable(
	{ 
		cancel: "div.content", 
		grid: [ 2, 2 ],
		containment: "body"
	});
