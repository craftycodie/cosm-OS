>eval const client=require('../client');require('fs').readFile('path', {encoding: 'utf-8'}, function(err,data){if(!err){client.channels.get('channelId').send(data.substring(0, 1999)); } else {console.log(err)}});