"use strict";
// الوضع العسكري
module.exports = function(sequelize, DataTypes) {
  var MilitaryStatus = sequelize.define("MilitaryStatus", {
    month: {type:DataTypes.INTEGER(2),defaultValue:0},
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        MilitaryStatus.belongsTo(models.Personal, {
          as: 'PersonalId', 
          foreignKey : {
            name : 'Personal_Id',
            allowNull : true
          },
          onDelete: "restrict",
        });
      }
    }
  });
  return MilitaryStatus;
};
