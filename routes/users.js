var express = require('express');
var router = express.Router();
var url = require("url");1
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = url.parse(req.url, true).query;
  console.log(query);

  var code = query.code;

  var auth = new OAuth2(config.GOOGLE.CLIENT_ID, config.GOOGLE.CLIENT_SECRET, config.GOOGLE.REDIRECT_URL);
  auth.getToken(code, function(err, tokens) {
    if(!err) {
      console.log(tokens);
      var credntials = auth.setCredentials(tokens);

      res.send("access tokenは取得出来たけど、APIの叩き方が分からない");
    }
  }); 
});

module.exports = router;
