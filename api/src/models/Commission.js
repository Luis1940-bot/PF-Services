const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("commission", {
    commission: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    typecommission: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
