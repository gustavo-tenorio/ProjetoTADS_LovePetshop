const Sequelize = require('sequelize');
const connection = require('../database/database');

const agendamentoVet = connection.define("agendamentoVet",{
    nomeDono:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeAnimal:{
        type: Sequelize.STRING,
        allowNull: true
    },
    especie:{
        type: Sequelize.STRING,
        allowNull: false
    },
    raca:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telDono:{
        type:Sequelize.STRING,
        allowNull: false
    },
    observacoes:{
        type:Sequelize.TEXT,
        allowNull: false
    }
})

agendamentoVet.sync({force: false}).then(console.log("tabela agendamento vet criada!"));

module.exports = agendamentoVet;