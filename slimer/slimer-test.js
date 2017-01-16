var page = require("webpage").create();

// page.open('http://testing-gounds.herokuapp.com/auto/what', function(status) {
//  var title = page.evaluate(function() {
//    return document.title;
//  });
//  console.log('IP is: ' + title);
// });

page.open("https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html")
.then(function(status){
     if (status == "success") {
         console.log("The title of the page is: "+ page.title);
     }
     else {
         console.log("Sorry, the page is not loaded");
     }
     page.close();
     phantom.exit();
})