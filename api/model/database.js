const Sequelize = require("sequelize");

const database = new Sequelize(
    'kcg',
    'root',
    '3098',
    {
        host:'localhost',
        dialect:"mysql",
    }
);

module.exports = database;

