// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

// module.exports = sequelize;


const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    db = client.db(dbName);
    console.log('Connected to MongoDB successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();

module.exports = db;

