

$(".btn_expand").click(function(){
	console.log("i clicked on expand");
	$(this).parent().parent().parent().addClass("page_fullscreen");
	$(this).parent().parent().parent().removeAttr("style");
});



$(".btn_minify").click(function(){
	// get file target from data_target_file
	var s_data_target_icon = $(this).parent().parent().parent().attr("data-target-icon");
	var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
	$(s_icon_selector).removeClass("active");

	$(this).parent().parent().parent().css("display","none");
});
$(".icon_app").click(function(){
	// add active class
	$(this).addClass("active");
	// get file target from data_target_file
	var s_data_target_file = $(this).attr("data-target-file");
	var s_file_selector = "[data-target-icon='"+s_data_target_file+"']";
	$(s_file_selector).css("display","block");
});

$(".btn_close").click(function(){
	$(this).parent().parent().parent().css("display","none");
	var s_data_target_icon = $(this).parent().parent().parent().attr("data-target-icon");
	var s_icon_selector = "[data-target-file='"+s_data_target_icon+"']";
	console.log($(s_icon_selector));
	$(s_icon_selector).remove();
});
// bring focused page on the front
$(".page").click(function(){
	$(".page").css("z-index", "5").removeClass("page_focus");
	$(this).css("z-index", "10").addClass("page_focus");
});


// add coresponding icon in the desktop bar 
$(".page").resizable();

//  jquery draggable
$( ".page" ).draggable(
	{ 
		cancel: "div.content", 
		grid: [ 2, 2 ],
		containment: "body"
	});
	