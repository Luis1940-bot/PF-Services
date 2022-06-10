require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// const {
//   AgeRange,
//   Citiy,
//   Commission,
//   Condition,
//   Contract,
//   Country,
//   Post,
//   Professional,
//   Specialty,
//   State,
//   Taxe,
//   User,
// } = sequelize.models;
const { Users, States, Cities, Countries, Professionals } = sequelize.models;

States.hasMany(Users);
Users.belongsTo(States);

Cities.hasMany(Users);
Users.belongsTo(Cities);

Countries.hasMany(Users);
Users.belongsTo(Countries);

Users.hasMany(Professionals);
Professionals.belongsTo(Users);

// Countries.hasMany(States);
// States.belongsTo(Countries);

// Professionals.belongsToMany(AgeRanges, { through: "ProfessionalsAgeranges" });
// AgeRanges.belongsToMany(Professionals, { through: "ProfessionalsAgeranges" });

// Professionals.belongsToMany(Specialties, {
//   through: "ProfessionalsSpecialties",
// });
// Specialties.belongsToMany(Professionals, {
//   through: "ProfessionalsSpecialties",
// });

// Users.hasOne(Cities);
// Cities.belongsToMany(Users, { through: "UsersCities" });

// Users.belongsToMany(States, { through: "UsersStates" });
// States.belongsToMany(Users, { through: "UsersStates" });

// Users.hasOne(Countries);
// Countries.belongsToMany(Users, { through: "UsersCountries" });

// Posts.hasOne(Cities);
// Cities.belongsToMany(Posts, { through: "PostsCities" });

// Posts.hasOne(States);
// States.belongsToMany(Posts, { through: "PostsStates" });

// Posts.hasOne(Countries);
// Countries.belongsToMany(Posts, { through: "PostsCountries" });

// Users.hasMany(Posts);
// Posts.belongsTo(Users);

// Posts.belongsToMany(Conditions, { through: "PostsConditions" });
// Conditions.belongsToMany(Posts, { through: "PostConditions" });

// Professionals.hasMany(Contracts);
// Contracts.belongsTo(Professionals);
//>>>>>>> back_end

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
