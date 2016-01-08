"use strict";
// مستوي الوظيفة
module.exports = function(sequelize, DataTypes) {
  var LevelJob = sequelize.define("LevelJob", {
    levelJob_name: DataTypes.STRING (60) ,
    code: DataTypes.STRING (10) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return LevelJob;
};