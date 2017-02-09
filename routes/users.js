var express = require('express');
var router = express.Router();
var url = require("url");
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var msg = "";

  var query = url.parse(req.url, true).query;
  console.log(query);

  var code = query.code;
  var state = query.state;
  
  // TODO: stateの検証をするべき

  var auth = new OAuth2(config.GOOGLE.CLIENT_ID, config.GOOGLE.CLIENT_SECRET, config.GOOGLE.REDIRECT_URL);
  auth.getToken(code, function(err, tokens) {
    if(!err) {
      console.log(tokens);

      var options = {
        uri: "https://www.googleapis.com/oauth2/v3/tokeninfo",
        form: {
          id_token: tokens["id_token"],
        }
      };

      request.post(options, function(error, response, body){
        console.log(body);
        var data = JSON.parse(body);

        if ((data.iss != "accounts.google.com") || (data.aud != config.GOOGLE.CLIENT_ID)) {
          msg = "認証失敗";
        }
        else {
          msg = "あなたのアドレスは " + data.email + "です";
        }
      });
      
    }
  });
  

// TODO: msgをrenderに渡せるようにする
res.render('users', { title: 'Google OpenID Connect', msg: msg });
});

module.exports = router;
