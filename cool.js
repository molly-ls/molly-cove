var page = require('webpage').create();
page.open('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    var title = page.evaluate(function() {
      return jQuery('title').text().trim()
    });
    console.log(title)
  }
  phantom.exit();
});