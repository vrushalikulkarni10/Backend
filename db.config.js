 const Sequelize = require('sequelize');
 const dbName = 'customer';
 const dbUser = 'root';
 const dbPassword = 'root';

 const sequelize = new Sequelize(dbName, dbUser,dbPassword,{
    host: 'localhost',
    port:3306,
    dialect: 'mysql'
 });

 const db = {}
 db.Sequelize = Sequelize
 db.Sequelize = sequelize;


 //Models-tables
 db.customers = require('./customer.model.js')(sequelize, Sequelize);


 module.exports = db;