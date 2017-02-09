var express = require('express');
var router = express.Router();
var url = require("url");

/* GET users listing. */
router.get('/', (req, res, next) => {
  var query = url.parse(req.url, true).query;
  console.log(query);

  var code = query.code;
  var code = query.state;
  
  // TODO: stateの検証をするべき
  res.send("code取得まではおk");
});

module.exports = router;
