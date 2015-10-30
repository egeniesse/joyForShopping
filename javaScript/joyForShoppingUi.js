(function(){

	$(document).ready(function(){

		var $categories = $(".categories"),
		$menuBarLi = $(".menuBar li");

		$menuBarLi.mouseenter(function(){
			$(this).attr("id", "selected");
		});
		$menuBarLi.mouseleave(function(){
			$(this).removeAttr("id", "selected");
		});

		$categories.mouseenter(function(){
			$categories.find("ul").show();
		});

		$categories.mouseleave(function(){
			$categories.find("ul").hide();
		});




	
	});
	

})();