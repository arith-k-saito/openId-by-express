var express = require('express');
var router = express.Router();
var readline = require('readline');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  var hash = crypto.createHash('sha256');
  hash.update(SALT + Math.random() + Date())
  var stateToken = hash.digest('hex');

  var auth = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  var url = auth.generateAuthUrl({ response_type: RESPONSE_TYPE, scope: SCOPE, state: stateToken});
  console.log(url);

  res.render('index', { title: 'Google OpenID Connect', url: url });
});

module.exports = router;
