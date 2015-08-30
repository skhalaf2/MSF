$(document).ready(function(){
	$('.ws > p').hide();

	$('.ws > h2').click(function(){
		$('.glyph', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
	});
	$('.ws > h2').click(function(){
		$(this).siblings().slideToggle();
	});
});

