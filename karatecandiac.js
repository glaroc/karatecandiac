$(document).ready(function(){
	$('.videomenu li').click(function(){
		var id= $(this).find('a').attr("vid");
		var ref = window.open('http://www.youtube.com/embed/'+id+'?html5=1', '_blank', 'location=yes');
	});

	$('.mainmenu li').click(function(){
		var ref = window.open($(this).find('a').attr('tar'));
	});
});