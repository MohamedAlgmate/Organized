var express = require('express');
var router = express.Router();
var models  = require('../models');
var Sequelize = require('sequelize')
var userHelpers = require('../app/userHelpers');
// Start Directors /////////////////////////////////////////////////////////
router.get('/', function(req, res) {
    var page = userHelpers.getPage(req);
    var limit = userHelpers.getLimit(page);
    models.Directors.findAndCountAll({
      where: {
        status: 1
      },
      limit : 10,
      offset: limit,
    }).then(function(directors) {
      var pageCount = userHelpers.getPageCount(directors.count);
      var pagination = userHelpers.paginate(page,pageCount);
      res.render('directors', { title: 'عرض اﻷدارات',pagination:pagination,collapseSeven: 'collapse in', dire:directors.rows, activeSevenOne: 'active' });
    });
  });

router.get('/newDirectors', function(req, res) {
    res.render('newDirectors', { title: 'إضافة أدارة جديده', collapseSeven: 'collapse in', activeSevenOne: 'active' });
  });

  router.post('/newDirectors', function(req, res) {
    // req.body.UserId=req.session.idu;
    models.Directors.create(req.body).then(function() {
      res.redirect('/directors?msg=1');
    });
  });
// ///  End Directors  ////////////////////////////////////////////////

module.exports = router;