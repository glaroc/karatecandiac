    document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(function(){
	$('.videomenu li').click(function(){
		var id= $(this).find('a').attr("vid");
		if (parseInt(id.substring(0,1))>0) {
			var ref = window.open('http://player.vimeo.com/video/'+id, '_blank', 'location=yes');
		}else{
			var ref = window.open('http://www.youtube.com/embed/'+id+'?html5=1', '_blank', 'location=yes')
		}
	});

	$('.mainmenu li').click(function(){
		var ref = window.open($(this).find('a').attr('tar'));
	});
});

function onDeviceReady() {
    $('.techmenu li').click(function(){
        var ref = $(this).find('a').attr('tar');
        downloadFile(ref);
    });        
}

function downloadFile(ref) {
	$('#ready').html(ref);
    window.requestFileSystem(
        LocalFileSystem.PERSISTENT,
        0,
        onRequestFileSystemSuccess,
        fail
    );
}

function onRequestFileSystemSuccess(fileSystem) {
    fileSystem.root.getFile(
        'dummy.html',
        {create: true, exclusive: false},
        onGetFileSuccess,
        fail
    );
}

function onGetFileSuccess(fileEntry) {
    var path = fileEntry.toURL().replace('dummy.html', '');
    var fileTransfer = new FileTransfer();
    fileEntry.remove();
    
    fileTransfer.download(
        "http://www.karatecandiac.com/TechniquesJaune.pdf",
        path + 'theFile.pdf',
        function(file) {
            console.log('download complete: ' + file.toURL());
            window.plugins.fileOpener.open(file.toURL());
            $('#ready').html(file.toURL());
        },
        function(error) {
            console.log('download error source ' + error.source);
            console.log('download error target ' + error.target);
            console.log('upload error code: ' + error.code);
        }
    );
}


function fail(evt) {
    console.log(evt.target.error.code);
}