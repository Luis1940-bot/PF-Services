const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
    // {
    //   // don't add the timestamp attributes (updatedAt, createdAt)
    //   timestamps: false,
    //   // If don't want createdAt
    //   createdAt: false,
    //   // If don't want updatedAt
    //   updatedAt: false,
    // }
    // {
    //   initialAutoIncrement: 9000,
    // }
  );
};
