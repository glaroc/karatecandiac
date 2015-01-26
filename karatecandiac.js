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
	$('.techmenu li').click(function(){
		var ref = $(this).find('a').attr('tar');
		download(ref);
	});

});




function download(file) {
    var remoteFile = file;
    var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
        fileSystem.root.getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
            var localPath = fileEntry.fullPath;
            if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                localPath = localPath.substring(7);
            }
            var ft = new FileTransfer();
            ft.download(remoteFile,
                localPath, function(entry) {
                    window.plugins.fileOpener.open("file://"+entry.fullPath);
                }, fail);
        }, fail);
    }, fail);
}
