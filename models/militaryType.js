"use strict";
// نوع الوضع العسكري
module.exports = function(sequelize, DataTypes) {
  var MilitaryType = sequelize.define("MilitaryType", {
    military_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return MilitaryType;
};