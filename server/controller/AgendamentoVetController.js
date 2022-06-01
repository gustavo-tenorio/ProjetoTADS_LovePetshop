const express = require('express');
const router = express.Router();

const AgendamentoVet = require('../model/agendamentoVet');

//Salvar dados na tabela banhoTosa
router.post('/agendamentoVet/agendar',(req,res)=>{
    let nDono = req.body.dono;
    let nAnimal = req.body.nomeAnimal;
    let nEspecie = req.body.especie;
    let nRaca = req.body.raca;
    let telDono = req.body.telefone;
    let observacoes = req.body.observacoes;

    AgendamentoVet.create({
        nomeDono : nDono,
        nomeAnimal : nAnimal,
        especie : nEspecie,
        raca: nRaca,
        telDono : telDono,
        observacoes: observacoes
        
    }).then(res.redirect("/painel"))
});
//Editar
router.get('/agendamento/edit/:id',(req,res)=>{
    let id = req.params.id;
    
    AgendamentoVet.findByPk(id).then(cadastros =>{
        if(cadastros != undefined){
            res.render('../views/view/partials/agendamentovet/editAgendamento.ejs',{cadastros:cadastros});
        }else{
            res.redirect('/registros');
        }
    })
});

//Salvar Update dos cadastros
router.post('/agendamentoVet/update',(req,res)=>{
    let id = req.body.id;
    let nDono = req.body.dono;
    let nAnimal = req.body.nomeAnimal;
    let nEspecie = req.body.especie;
    let nRaca = req.body.raca;
    let telDono = req.body.telefone;
    let observacoes = req.body.observacoes;

            
    AgendamentoVet.update({
        nomeDono : nDono,
        nomeAnimal : nAnimal,
        especie : nEspecie,
        raca: nRaca,
        telDono : telDono,
        observacoes: observacoes
    },{where:
        {id:id}
    }).then(() =>{
            res.redirect('/painel');
        }).catch(Error =>{
            console.log(Error);
        })
});

//Deletar agendamento
router.post('/agendamentoVet/delete',(req,res) =>{
    let id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){
            AgendamentoVet.destroy({
                where:{
                    id:id
                }
            }).then(()=>{
                res.redirect('/painel');
            });
        }else{
            res.redirect('/painel');
        }
    }else{
        res.redirect('/painel');
    }
});

module.exports = router;