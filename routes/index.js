const express = require('express');
const router = express.Router();
const Spooky = require('spooky')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auto', function(req, res, next) {
	var spooky = new Spooky({
		child: {
			'ssl-protocol': 'any',
			'ignore-ssl-errors': true
		},
		casper: {
			logLevel: 'debug',
			verbose: true,
			waitTimeout: 20000
		}  		
	}, function (err) {
		if (err) {
			e = new Error('Failed to initialize SpookyJS')
			e.details = err
			throw e
		}

		spooky.start('https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html')
		spooky.then(function () {
			this.waitForSelector('button#gckeyBtn')
			this.emit('test', 'First Page: ' + this.getTitle())
		})

		spooky.run()
	})

	spooky.on('test', function (msg) {
		console.warn(msg)
		res.send(msg)
	})
});

module.exports = router;
