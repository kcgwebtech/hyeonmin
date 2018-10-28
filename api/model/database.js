const Sequelize = require("sequelize");

const database = new Sequelize(
    'account',
    'root',
    '3098',
    {
        host:'localhost',
        dialect:"mysql",
    }
);

module.exports = database;