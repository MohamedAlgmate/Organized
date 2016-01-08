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
          as: 'SpecialtyId', 
          foreignKey : {
            name : 'Specialty_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
      }
    }
  });
  return Specialty;
};
