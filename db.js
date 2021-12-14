const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelizedb = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './handlebar.sqlite',
    logging: false
});

 module.exports={sequelizedb, DataTypes, Model};