var express = require('express');
var router = express.Router();

// Start cPanel /////////////////////////////////////////////////////////
router.get('/', function(req, res) {
  res.render('cPanel', { title: 'لوحة التحكم', activeCPanel: 'active' });
});
// End Panel /////////////////////////////////////////////////////////


module.exports = router;