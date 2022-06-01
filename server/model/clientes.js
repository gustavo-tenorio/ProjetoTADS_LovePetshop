const Sequelize = require('sequelize');
const connection = require('../database/database');

const clientes = connection.define("clientes",{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

clientes.sync({force:false}).then(console.log("Tabela de clientes criada!"));

module.exports = clientes;