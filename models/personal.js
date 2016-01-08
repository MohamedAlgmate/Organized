"use strict";
// الشخص
module.exports = function(sequelize, DataTypes) {
  var Personal = sequelize.define("Personal", {
    Employee_id: DataTypes.STRING(12),
    national_id: DataTypes.STRING(12),
    name: DataTypes.STRING (150) ,
    Mothers_name: DataTypes.STRING (150) ,
  	Birth_Date: DataTypes.DATEONLY(),
  	Birth_Place: DataTypes.STRING (60) ,
    address: DataTypes.STRING (60) ,
  	Gender: DataTypes.INTEGER (1) ,
  	Socialstatus_Id: DataTypes.INTEGER (2) ,
    son: {type:DataTypes.INTEGER(6),defaultValue:0},
    dauthter: {type:DataTypes.INTEGER(6),defaultValue:0},
    phone: DataTypes.STRING(50),
    card_id: DataTypes.STRING(30),
    passport_id: DataTypes.STRING(30),
    Issue_Date: DataTypes.DATEONLY(),
    Issue_Place: DataTypes.STRING (60) ,
    certificate_date: DataTypes.DATEONLY(),
  	Is_Alive: DataTypes.INTEGER (1) ,
  	PersonalType:{type:DataTypes.INTEGER(1),defaultValue:0},
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        Personal.belongsTo(models.Country, {
          as: 'Nationality', 
          foreignKey : {
            name : 'Nationality_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Personal.belongsTo(models.City, {
          as: 'city_birth', 
          foreignKey : {
            name : 'city_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
      }
    }
  });
  return Personal;
};
