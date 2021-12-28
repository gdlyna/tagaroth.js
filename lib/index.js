import { openLink } from './openLink.mjs';

var cLog = function(string) { 
    console.log(string);
}

var openLink =  openLink

exports.cLog = cLog;
exports.openLink = openLink;