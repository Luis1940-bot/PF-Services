const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trainings: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avalable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cvu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    google_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebook_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    twiter_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verified_user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
