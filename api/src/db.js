require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { native } = require("pg");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//ESTE PROCESO LO REEMPLAZO POR UNO QUE DA DIEGO PARA DEPLOYMENT.
// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

// //------NUEVO PROCESO
// let sequelize =
//   process.env.NODE_ENV === "production"
//     ? new Sequelize({
//         database: DB_NAME,
//         dialect: "postgres",
//         host: DB_HOST,
//         username: DB_USER,
//         password: DB_PASSWORD,
//         port: 5432,
//         pool: {
//           max: 5,
//           min: 0,
//           idle: 10000,
//         },
//         dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//           keepAlive: true,
//         },
//         ssl: true,
//       })
//     : new Sequelize(
//         `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//         { logging: false, native: false }
//       ); 
// //------FIN NUEVO PROCESO

// const { Breeds } = require("./models/breeds");
// const { Temperaments } = require("./models/temperaments");

// fBreeds(sequelize);
// fTemperaments(sequelize);

//---------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Breeds, Temperaments} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Breeds.belongsToMany(Temperaments, { through: "BreedTemperaments" });
// Temperaments.belongsToMany(Breeds, { through: "BreedTemperaments" });

// // it worked before the TEST development
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

// module.exports = {
//   conn: sequelize,// para importart la conexión { conn } = require('./db.js');
//   Breeds,
//   Temperaments,
//   // BreedTemperaments,
// };
