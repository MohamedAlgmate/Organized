"use strict";
// نوع المؤهل
module.exports = function(sequelize, DataTypes) {
  var QualifiedType = sequelize.define("QualifiedType", {
    name: DataTypes.STRING (60) ,
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        QualifiedType.belongsTo(models.Qualification, {
          as: 'QualificationId', 
          foreignKey : {
            name : 'Qualification_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
      }
    }
  });
  return QualifiedType;
};
