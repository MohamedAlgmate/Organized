var express = require('express');
var router = express.Router();
var models  = require('../models');
var Sequelize = require('sequelize')

// Start division /////////////////////////////////////////////////////////
  router.get('/', function(req, res) {
    
    res.render('newDirectors', { title: 'عرض الادرات', collapseSeven: 'collapse in', activeSevenOne: 'active' });
  });
// ///  End division  ////////////////////////////////////////////////

module.exports = router;