var casper = require('casper').create({
	logLevel: 'debug',
	verbose: true,
	silentErrors: true,
	waitTimeout: 200000
})

casper.start('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html')
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
casper.then(function () {
	this.waitForSelector('button#gckeyBtn')
	this.echo('First Page: ' + this.getTitle())
})
// casper.thenClick('button#gckeyBtn', function () {
// 	this.waitForSelector('form#login')
// 	this.echo('wait for form#login')
// })
// casper.then(function() {
// 	this.fill('form#login', {
// 		'token1': 'LawScout',
// 		'token2': 'h3kf9qQNr4pHy8cr'
// 	}, true)
// })
// casper.then(function () {
// 	this.waitForSelector('input#continue')
// 	this.echo('wait for input#continue' + this.getTitle())
// })
// casper.thenClick('input#continue', function() {
// 	this.waitForSelector('input#nxt')
// 	this.echo('wait for input#nxt ' + this.getTitle())
// })
casper.run()


// curl -v --url http://testing-gounds.herokuapp.com/auto/what
// curl -v -U proxy:f79d1ac2e616-49c1-93ac-cb4d647136d7 -x proxy-23-21-132-4.proximo.io:80  --url http://testing-gounds.herokuapp.com/auto/what
// http://proxy:f79d1ac2e616-49c1-93ac-cb4d647136d7@proxy-23-21-132-4.proximo.io:80

// http://elementalselenium.com/tips/38-headless
// Acquire::http::proxy "http://proxy:f79d1ac2e616-49c1-93ac-cb4d647136d7@proxy-23-21-132-4.proximo.io:80";