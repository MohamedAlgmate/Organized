"use strict";
// الوضع الوظيفي
module.exports = function(sequelize, DataTypes) {
  var Jobposition = sequelize.define("Jobposition", {
    jobposition_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Jobposition;
};