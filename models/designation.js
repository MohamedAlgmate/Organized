"use strict";
// اجراء التعيين
module.exports = function(sequelize, DataTypes) {
  var Designation = sequelize.define("Designation", {
  	designation_Date: DataTypes.DATEONLY(),
    employee_degree: DataTypes.STRING (30) ,
    seniority_degree_Date: DataTypes.DATEONLY(),
    class_degree_Date: DataTypes.DATEONLY(),
    class_job: DataTypes.STRING (25) ,
    action_date: DataTypes.DATEONLY(),
    Signature: DataTypes.INTEGER (1) ,
    Signature_date: DataTypes.DATEONLY(),
  	status:{type:DataTypes.INTEGER(1),defaultValue:1} 
  }, {
    classMethods: {
      associate: function(models) {
        Designation.belongsTo(models.Personal, {
          as: 'PersonalId', 
          foreignKey : {
            name : 'Personal_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Designation.belongsTo(models.DesignationType, {
          as: 'DesignationTypeId', 
          foreignKey : {
            name : 'DesignationType_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Designation.belongsTo(models.Jobposition, {
          as: 'JobpositionId', 
          foreignKey : {
            name : 'Jobposition_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Designation.belongsTo(models.LevelJob, {
          as: 'LevelJobId', 
          foreignKey : {
            name : 'LevelJob_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Designation.belongsTo(models.Job, {
          as: 'JobId', 
          foreignKey : {
            name : 'Job_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
        Designation.belongsTo(models.JobStatus, {
          as: 'JobStatusId', 
          foreignKey : {
            name : 'JobStatus_Id',
            allowNull : true
          },
          onDelete: "SET NULL"
        });
      }
    }
  });
  return Designation;
};
