"use strict";
var page = require('webpage').create();

// phantom.setProxy('http://proxy-23-21-132-4.proximo.io','80','http', 'proxy','f79d1ac2e616-49c1-93ac-cb4d647136d7')
// phantom.setProxy('167.114.167.221', '3128')

page.settings.userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1"
page.open('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html', function(status) {
	console.log(status)
	// console.log(page.injectJs('https://www.ic.gc.ca/eic/home.nsf/js/webtrends.js'))
	var title = page.evaluate(function() {		
    return jQuery('title').text().trim()
  });
  console.log(title)
  phantom.exit();
})

// page.onInitialized = function() {
// 	if(page.injectJs('webtrends.js')) {
// 		var test = page.evaluate(function() {
// 	    return typeof WebTrends
// 	  });
// 	  console.log('onInitialized, webtrends-> ', test)
// 	}
// };

// page.onResourceRequested = function (request) {
//     console.log('Request ' + JSON.stringify(request, undefined, 1));
// };

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};

