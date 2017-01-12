"use strict";
var page = require('webpage').create();

page.open('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html', function(status) {
	console.log(status)
	// console.log(page.injectJs('https://www.ic.gc.ca/eic/home.nsf/js/webtrends.js'))
	var title = page.evaluate(function() {		
    return jQuery('title').text().trim()
  });
  console.log(title)
  var test = page.evaluate(function() {
  	return typeof WebTrends
  })
  console.log('WebTrends ->', test)
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

