const connection = require('../database/database');
const Sequelize = require('sequelize');

const funcionarios = connection.define('funcionarios',{
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    userName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

funcionarios.sync({force:false});

module.exports = funcionarios;