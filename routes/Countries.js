var express = require('express');
var router = express.Router();
var models  = require('../models');
var Sequelize = require('sequelize')
var userHelpers = require('../app/userHelpers');
// Start Directors /////////////////////////////////////////////////////////
router.get('/', function(req, res) {
    // var page = userHelpers.getPage(req);
    // var limit = userHelpers.getLimit(page);
    // models.Directors.findAndCountAll({
    //   where: {
    //     status: 1
    //   },
    //   limit : 10,
    //   offset: limit,
    // }).then(function(directors) {
    //   var pageCount = userHelpers.getPageCount(directors.count);
    //   var pagination = userHelpers.paginate(page,pageCount);
      res.render('Countries', { title: 'عرض الدول',collapseSeven: 'collapse in', activeSevenfour: 'active' });
    // });
  });

// router.get('/newWorkSite', function(req, res) {
//     res.render('newWorkSite', { title: 'إضافة موقع عمل', collapseSeven: 'collapse in', activeSevenOne: 'active' });
//   });

//   router.post('/newDirectors', function(req, res) {
//     // req.body.UserId=req.session.idu;
//     models.Directors.create(req.body).then(function() {
//       res.redirect('/directors?msg=1');
//     });
//   });

//   //search Directors by name
// router.get('/directorssearch/:name',function(req, res) {
//    models.Directors.findAll({
//     where: {
//       directors_name:{
//         $like:'%'+req.params.name+'%'
//       } 
//     }
//   }).then(function(directors) {
//     res.send(directors);
//   });
// });
// ///  End Directors  ////////////////////////////////////////////////

module.exports = router;