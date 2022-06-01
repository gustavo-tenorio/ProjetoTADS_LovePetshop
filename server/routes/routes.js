const express = require('express');
const router = express.Router();
const Clientes = require('../model/clientes');
const BanhoTosa = require('../model/banhoTosa');
const AgendamentoVet = require('../model/agendamentoVet')
const userAuth = require('../middleware/userAuth');

router.get('/painel',userAuth,(req,res)=>{
    let val = req.session.user;

    Clientes.findAll({raw: true}).then(clientes =>{
        BanhoTosa.findAll({raw: true}).then(banhoAgendado =>{
            AgendamentoVet.findAll({raw : true}).then(vetAgendado =>{
                res.render('./view/main',{user:val, clientes: clientes, banhoAgendado: banhoAgendado, vetAgendado : vetAgendado});
            })
            
        })
    })
    
});

module.exports = router;