import { tiger } from './lib/openLink.mjs';

var cLog = function(string) { 
    console.log(string);
}

var openLink =  tiger

exports.cLog = cLog;
exports.openLink = openLink;