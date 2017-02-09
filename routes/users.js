var express = require('express');
var router = express.Router();
var url = require("url");
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = url.parse(req.url, true).query;
  console.log(query);

  var code = query.code;
  var state = query.state;
  
  // TODO: stateの検証をするべき

/* 直接POSTで送る場合は下記みたいな感じ
 * https://developers.google.com/identity/protocols/OpenIDConnect#sendauthrequest
var options = {
  uri: "https://www.googleapis.com/oauth2/v4/token",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
  form: {
    code: code,
    client_id: config.GOOGLE.CLIENT_ID,
    client_secret: config.GOOGLE.CLIENT_SECRET,
    redirect_uri: config.GOOGLE.REDIRECT_URL,
    grant_type: "authorization_code"
  }
};

request.post(options, function(error, response, body){
  console.log(body);
  res.send("直接POSTを試した");
});
*/

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
