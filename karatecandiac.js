$(document).ready(function(){
	$('.videomenu li').click(function(){
		var id= $(this).find('a').attr("vid");
		var ref = window.open('http://www.youtube.com/embed/'+id+'?html5=1', '_blank', 'location=yes');
	});

	$('.mainmenu li').click(function(){
		var ref = window.open($(this).find('a').attr('tar'));
	});
	$('.techmenu li').click(function(){
		//var ref = window.open($(this).find('a').attr('tar'),'_system','location=yes');
		href=$(this).find('a').attr('tar');
		window.plugins.fileOpener.open(href);
	});

});