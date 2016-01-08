"use strict";
/// موقع العمل
module.exports = function(sequelize, DataTypes) {
  var WorkSite = sequelize.define("WorkSite", {
    workSite_name: DataTypes.STRING (60) ,
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        WorkSite.belongsTo(models.Directors, {
          as: 'DirectorsId', 
          foreignKey : {
            name : 'Directors_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
      }
    }
  });
  return WorkSite;
};
