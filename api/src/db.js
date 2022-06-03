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
//!---se mutea para generar las tablas en la base de datos
 const { AgeRange, City, Commission,Condition , Contract,Countries,Post,Professional, Specialty, State, Taxe, User } = sequelize.models;

 Professional.belongsToMany( Specialty, { through: "Professional Specialty"});
 Specialty.belongsToMany( Professional, {through: "Professional Specialty"});

Professional.belongsToMany( AgeRange,{ through: "Professional AgeRange"});
AgeRange.belongsToMany( Professional, {through: "Professional AgeRange"});

Professional.hasOne(City);
City.belongsToMany(Professional, {through: "Professional City"});

Professional.hasOne(State);
State.belongsToMany(Professional, {through: "Professional State"});

Professional.hasOne(Countries);
Countries.belongsToMany(Professional, {through: "Professional Countries"});

Professional.hasMany(Contract);
Contract.belongsTo(Professional);

User.hasOne(City);
City.belongsToMany(User, {through: "User City"});

User.hasOne(State);
State.belongsToMany(User, {through: "User State"});

User.hasOne(Countries);
Countries.belongsToMany(User, {through: "User Countries"});

Post.hasOne(City);
City.belongsToMany(Post, {through: "Post City"});

Post.hasOne(State);
State.belongsToMany(Post, {through: "Post State"});

Post.hasOne(Countries);
Countries.belongsToMany(Post, {through: "Post Countries"});

User.hasMany(Post);
Post.belongsTo(User);

Post.belongsToMany( Condition,{ through: "Post Condition"});
Condition.belongsToMany( Post, {through: "Post Condition"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
