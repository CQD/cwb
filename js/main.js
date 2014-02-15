$(function(){
	var $mainMenu = $('#nav .menu');
	$('#nav .menuToggle').on('click touchstart', function(){
		if($mainMenu.is(':hidden')){
			$mainMenu.slideDown(230);
		} else {
			$mainMenu.slideUp(230);
		}

	});
});