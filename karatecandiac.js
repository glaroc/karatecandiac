$(document).ready(function(){
	$('.videomenu li').click(function(){
		var id= $(this).find('a').attr("vid");
		var ref = window.open('http://www.youtube.com/embed/'+id+'?html5=1', '_blank', 'location=yes');
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
                    window.plugins.fileOpener.open(entry.fullPath);
                }, fail);
        }, fail);
    }, fail);
}
