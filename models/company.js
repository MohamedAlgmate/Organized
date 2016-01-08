"use strict";
// الشركات
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Company;
};