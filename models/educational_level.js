"use strict";
//المستوي التعليمي
module.exports = function(sequelize, DataTypes) {
  var Educational_level = sequelize.define("Educational_level", {
  	Eduction_Date: DataTypes.DATEONLY(),
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        Educational_level.belongsTo(models.Personal, {
          as: 'PersonalId', 
          foreignKey : {
            name : 'Personal_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
        Educational_level.belongsTo(models.Qualification, {
          as: 'QualificationId', 
          foreignKey : {
            name : 'Qualification_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Educational_level.belongsTo(models.QualifiedType, {
          as: 'QualifiedTypeId', 
          foreignKey : {
            name : 'QualifiedType_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Educational_level.belongsTo(models.Specialty, {
          as: 'SpecialtyId', 
          foreignKey : {
            name : 'Specialty_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
      }
    }
  });
  return Educational_level;
};
