"use strict";
// انهاء الخدمة
module.exports = function(sequelize, DataTypes) {
  var EndEmploy = sequelize.define("EndEmploy", {
    end_Date: DataTypes.DATEONLY(),
    transferred_to: DataTypes.STRING (60) ,
    action_Date: DataTypes.DATEONLY(),
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        EndEmploy.belongsTo(models.WhyEnd, {
          as: 'WhyEndId', 
          foreignKey : {
            name : 'WhyEnd_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
        EndEmploy.belongsTo(models.Personal, {
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
  return EndEmploy;
};
