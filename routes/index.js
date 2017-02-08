var express = require('express');
var router = express.Router();
var readline = require('readline');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

/* GET home page. */
router.get('/', function(req, res, next) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var auth = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  var url = auth.generateAuthUrl({ scope: SCOPE });

  res.render('index', { title: 'Google OpenID Connect', url: url });
});

module.exports = router;
