const Sequelize = require("sequelize");

const database = new Sequelize(
    'account',
    'root',
    {
        host:'localhost',
        dialect:"mysql",
    }
);

module.exports = database;