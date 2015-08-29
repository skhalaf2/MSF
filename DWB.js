$(document).ready(function(){
	$('.ws > p').hide();
	$('.ws > h2').click(function(){
		$(this).siblings().slideToggle();
	});
});