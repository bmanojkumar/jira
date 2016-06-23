var CronJob = require('cron').CronJob;
var request = require('request');

let timeZone = "Asia/Kolkata";
let hipchaturl = "https://imomentous.hipchat.com/v2/room/2480144/notification?auth_token=sTZ530CuwHGERNrNddBLXcCwu9gOhXd6JA9nEiqd";
let message = "@all update jira";


var headers = {
    'Content-Type': 'application/json'
}

var options = {
    url: hipchaturl,
    method: 'POST',
    headers: headers,
    body: JSON.stringify({"color":"green","message":"@all please update jira","notify":"false","message_format":"text"})
}



var job = new CronJob('0 30 18 * * 1-5', function() {
	console.log("sending req:");
	sendRequest(options);
  }, function () {
    console.log("im done");
  },
  false, /* Start the job right now */
  'Asia/Kolkata' /* Time zone of this job. */
);

function sendRequest(options) {
	console.log("inside req");
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body)
	    }else {
	    	console.log(error);
	    	console.log(JSON.stringify(response,null,2));
	    }
	})
}

module.exports = job;