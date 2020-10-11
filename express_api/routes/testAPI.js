
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

const server = router.listen(3000, () => {
    console.log('Listening on port %s', server.address().port)
  })

module.exports = router;
