require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const Country = require("./models/Countries");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
// const sequelize = new Sequelize(
//   `postgres://postgres:admin@localhost:5432/food`,

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

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User,AgeRange, Balance, Banking,Commission, Condition, Contract, Especiality, Post , Professional, Zone, City, Countries } = sequelize.models;

Professional.belongsToMany( Especiality,{ through: "Professional Especiality"});
Especiality.belongsToMany( Professional, {through: "Professional Especiality"});

Professional.belongsToMany( AgeRange,{ through: "Professional AgeRange"});
AgeRange.belongsToMany( Professional, {through: "Professional AgeRange"});

Professional.hasMany(Banking);
Banking.belongsTo(Professional);

Professional.hasMany(Zone, {through: "Professional Zone"});
Zone.belongsTo(Professional);

Professional.hasMany(Contract);
Contract.belongsTo(Professional);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasOne(Zone);
Zone.belongsTo(Post);

Zone.hasOne(City);
City.belongsToMany(Zone, {through:"Zone Ccountries"});

Zone.hasOne(Countries);
Countries.belongsToMany(Zone, {through:"Zone Countries"});

Post.belongsToMany( Condition,{ through: "Post Condition"});
Condition.belongsToMany( Post, {through: "Post Condition"});






// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Recipe.belongsToMany(Diet, {
//   through: "recipeDiet",
// });
// Diet.belongsToMany(Recipe, {
//   through: "recipeDiet",
// });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
