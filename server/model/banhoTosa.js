const Sequelize = require('sequelize');
const connection = require('../database/database');

const banhoTosa = connection.define("banhoTosa",{
    nomeDono:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telDono:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dataAgendada:{
        type: Sequelize.DATEONLY,
        allowNull: false,

    }
})

banhoTosa.sync({force: false}).then(console.log("tabela banho tosa criada!"));

module.exports = banhoTosa