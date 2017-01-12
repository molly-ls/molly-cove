"use strict";
var page = require('webpage').create();

// page.includeJs(
//   // Include the https version, you can change this to http if you like.
//   'https://www.ic.gc.ca/eic/home.nsf/js/webtrends.js',
//   function() {
//   	var foo = page.evaluate(function() {
//   		return WebTrends
//   	})
//   	console.log(foo)
//   }
// );

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

page.onInitialized = function() {
	// page.includeJs(
	//   // Include the https version, you can change this to http if you like.
	//   'https://www.ic.gc.ca/eic/home.nsf/js/webtrends.js',
	//   function() {
	//   	var foo = page.evaluate(function() {
	//   		return WebTrends
	//   	})
	//   	console.log(foo)
	//   }
	// );
	// console.log(page.injectJs('https://www.ic.gc.ca/eic/home.nsf/js/webtrends.js'))
	if(page.injectJs('webtrends.js')) {
		var test = page.evaluate(function() {
	    return typeof WebTrends
	  });
	  console.log('onInitialized, webtrends-> ', test)
	}
};

// page.onLoadStarted = function() {
//   var currentUrl = page.evaluate(function() {
//     return window.location.href;
//   });
//   console.log('Current page ' + currentUrl + ' will gone...');
//   console.log('Now loading a new page...');
// };

// page.onUrlChanged = function(targetUrl) {
//   console.log('New URL: ' + targetUrl);
// };

