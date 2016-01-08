"use strict";
//المؤل
module.exports = function(sequelize, DataTypes) {
  var Qualification = sequelize.define("Qualification", {
    qualification_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Qualification;
};