const Sequelize = require('sequelize');

const connection = new Sequelize('heroku_ffcb08da4ed819c','b8b06b0a7adc24','46bf41c9',{


    host:'us-cdbr-east-04.cleardb.com',
    dialect:'mysql',
    timezone: '-03:00'
});


module.exports = connection;