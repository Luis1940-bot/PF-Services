const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    google_user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook_user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twiter_user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified_user: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
