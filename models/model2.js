// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
    var Model2 = sequelize.define("Model2", {
      name2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isCoolByCrystal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Model2;
  };
  