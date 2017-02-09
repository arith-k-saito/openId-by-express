var express = require('express');
var router = express.Router();
var readline = require('readline');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  var hash = crypto.createHash('sha256');
  hash.update(config.SALT + Math.random() + Date())
  var stateToken = hash.digest('hex');

  var auth = new OAuth2(config.GOOGLE.CLIENT_ID, config.GOOGLE.CLIENT_SECRET, config.GOOGLE.REDIRECT_URL);
  var googleUrl = auth.generateAuthUrl({ response_type: config.GOOGLE.RESPONSE_TYPE, scope: config.GOOGLE.SCOPE, state: stateToken});
  console.log(googleUrl);

  res.render('index', { title: 'OpenID Connect', googleUrl: googleUrl });
});

module.exports = router;
