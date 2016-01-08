"use strict";
// الدورات التدربية
module.exports = function(sequelize, DataTypes) {
  var Courses = sequelize.define("Courses", {
    courses_type: DataTypes.INTEGER (1) ,
    Detail: DataTypes.STRING (250) ,
    start_date: DataTypes.DATEONLY(),
    end_date: DataTypes.DATEONLY(),
    courses_place: DataTypes.STRING (150) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
         Courses.belongsTo(models.Personal, {
          as: 'PersonalId', 
          foreignKey : {
            name : 'Personal_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
      }
    }
  });

  return Courses;
};