"use strict";
//الادارة
module.exports = function(sequelize, DataTypes) {
  var Directors = sequelize.define("Directors", {
    directors_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Directors;
};
