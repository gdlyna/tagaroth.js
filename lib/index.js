var cLog = function(string) { 
    console.log(string);
}

var openLink = function(link) {
    window.open(link, '_blank');
}
exports.cLog = cLog;
exports.openLink = openLink;