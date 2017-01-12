"use strict";
var page = require('webpage').create();

phantom.addCookie({
  'name'     : 'JSESSIONID',   /* required property */
  'value'    : '0001uGE_36S0qOu58IRrDJUxUeT:-2OG9CF',  /* required property */
  'domain'   : 'www.ic.gc.ca',
  'path'     : '/',                /* required property */
  'httponly' : true,
});

phantom.addCookie({
  'name'     : 'WT_FPC',   /* required property */
  'value'    : '=id=20fc8cdb810724daa221484250028028:lv=1484250028028:ss=1484250028028',  /* required property */
  'domain'   : 'ic.gc.ca',
  'path'     : '/',                /* required property */
  'expires'  : (new Date()).getTime() + (1000 * 60 * 60)   /* <-- expires in 1 hour */
});

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

