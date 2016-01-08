"use strict";
//الوحدة التنظيمية
module.exports = function(sequelize, DataTypes) {
  var OrganizationalUnit = sequelize.define("OrganizationalUnit", {
  	name: DataTypes.STRING (60) ,
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        OrganizationalUnit.belongsTo(models.Directors, {
          as: 'DirectorsId', 
          foreignKey : {
            name : 'Directors_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
        OrganizationalUnit.belongsTo(models.WorkSite, {
          as: 'WorkSiteId', 
          foreignKey : {
            name : 'WorkSite_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        OrganizationalUnit.belongsTo(models.Company, {
          as: 'CompanyId', 
          foreignKey : {
            name : 'Company_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
      }
    }
  });
  return OrganizationalUnit;
};
