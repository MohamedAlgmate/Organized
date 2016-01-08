"use strict";
// حالة الوظيفة
module.exports = function(sequelize, DataTypes) {
  var JobStatus = sequelize.define("JobStatus", {
    JobStatus_name: DataTypes.STRING (60) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return JobStatus;
};