"use strict";
// التخصص
module.exports = function(sequelize, DataTypes) {
  var Specialty = sequelize.define("Specialty", {
    name: DataTypes.STRING (60) ,
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        Specialty.belongsTo(models.Qualification, {
          as: 'QualificationId', 
          foreignKey : {
            name : 'Qualification_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
        Specialty.belongsTo(models.QualifiedType, {
          as: 'QualifiedTypeId', 
          foreignKey : {
            name : 'QualifiedType_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
      }
    }
  });
  return Specialty;
};
