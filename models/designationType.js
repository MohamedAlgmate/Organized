"use strict";
// نوع اجراء التعيين
module.exports = function(sequelize, DataTypes) {
  var DesignationType = sequelize.define("DesignationType", {
    name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return DesignationType;
};