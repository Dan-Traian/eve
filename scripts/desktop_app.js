

$(".icon_app").click(function(){
	// add active class
	$(this).addClass("active");

	// get file target from data_target_file
	var s_data_target_file = $(this).attr("data-target-file");

	var s_file_selector = "[data-target-icon='"+s_data_target_file+"']";

	var $file = $(s_file_selector);

	if($file.css("display")=="none"){
		$(s_file_selector).css("display","block");	
		var previous_top = $file.attr("data-previous-top");
		// console.log(previous_top);
		$("._page").css("z-index", "5").removeClass("desktop_item_focus");
		$file.css("z-index", "10").addClass("desktop_item_focus");
		new TimelineMax()
			.to($file,1,{ease: Power4.easeOut,opacity:1,top:previous_top,scaleX:1,scaleY:1})
			.timeScale(1);
	}
});


// $("._page").css("z-index","20");

$("._page .topbar .meta .meta_actions i").click(function(){

	if($(this).hasClass("minify")){
		// get file target from data_target_file
		var s_data_target_icon = $(this).parent().parent().parent().parent().attr("data-target-icon");
		var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
		$(s_icon_selector).removeClass("active");
		var $file = $(this).parent().parent().parent().parent();
		$file.attr("data-previous-top", $file.offset().top);  
		new TimelineMax()
			.to($file,1,{ease: Power4.easeOut,opacity:0,top:"90vh",scaleX:0.1,scaleY:0.1})
        	.addCallback(function(){
				$file.css("display","none");
			})
        	.timeScale(1);
		



	}
	if($(this).hasClass("expand")){
		console.log("i clicked on expand");
		$(this).parent().parent().parent().parent().toggleClass("page_fullscreen");
		// $(this).parent().parent().parent().parent().removeAttr("style");
	}
	if($(this).hasClass("close")){

		$(this).parent().parent().parent().parent().css("display","none");
		var s_data_target_icon = $(this).parent().parent().parent().parent().attr("data-target-icon");
		console.log(s_data_target_icon);
		var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
		// console.log($(s_icon_selector));

		$(s_icon_selector).css("transform-origin","center");
		new TimelineMax()
			.to($(s_icon_selector),0.7,{scaleX:0,scaleY:0})
			.addCallback(function(){
				$(s_icon_selector).remove();
			})
			.timeScale(1);

	}
	
});
// bring focused item on the front
$("._page").mousedown(function(){
	$("._page").css("z-index", "5").removeClass("desktop_item_focus");
	$(this).css("z-index", "10").addClass("desktop_item_focus");
});


//  jquery draggable
$( ".desktop_item" ).draggable(
{ 
	cancel: "div.content, div.topbar .menu", 
	grid: [ 2, 2 ],
	containment: "#draggable_container"
});
