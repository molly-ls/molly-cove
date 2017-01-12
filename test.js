var casper = require('casper').create({
	logLevel: 'debug',
	verbose: true,
	silentErrors: true,
	waitTimeout: 200000
})

casper.start('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng')
casper.then(function () {
	this.echo('First Page: ' + this.getTitle())
})
casper.thenOpen('https://clegc-gckey.gc.ca/j/eng/l', function () {
	this.waitForSelector('form#login')
})
casper.then([{
	'nuansUser': 'LawScout',
	'nuansPassword': 'h3kf9qQNr4pHy8cr'
}, function () {
	this.fill('form#login', {
		'token1': nuansUser,
		'token2': nuansPassword
	}, true)
}])
casper.thenOpen('https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html', function () {
	this.waitForSelector('button#gckeyBtn')
	this.echo('wait for button#gckeyBtn')
})
casper.thenClick('button#gckeyBtn', function () {
	this.waitForSelector('input#nxt')
	this.echo('wait for input#nxt')
})

casper.run()
