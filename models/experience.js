"use strict";
// الدورات التدربية
module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define("Experience", {
    experience_type: DataTypes.INTEGER (1) ,
    Detail: DataTypes.STRING (250) ,
    start_date: DataTypes.DATEONLY(),
    end_date: DataTypes.DATEONLY(),
    Length: DataTypes.STRING (150) ,
    status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
         Experience.belongsTo(models.Personal, {
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

  return Experience;
};