var express = require('express');
var router = express.Router();

/* GET . */
router.get('/', function (req, res, next) {
    req.sendDefaultSuccessMessage();
});

/* POSt emotions*/
router.post('/', function (req, res, next) {
    var openlrs = require('../lib/consumers/openlrs')(req.app.config.lrs);
    openlrs.addTraces(req.body).then(function (data) {
        res.json(data);
    }).fail(function (err) {
        res.json(err);
    });
});

module.exports = router;
