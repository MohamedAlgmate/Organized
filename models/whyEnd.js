"use strict";
// سبب الانهاء
module.exports = function(sequelize, DataTypes) {
  var WhyEnd = sequelize.define("WhyEnd", {
    WhyEnd_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return WhyEnd;
};