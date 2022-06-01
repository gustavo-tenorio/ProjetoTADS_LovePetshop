const express = require('express');
const router = express.Router();

const BanhoTosa = require('../model/banhoTosa');

//Salvar dados na tabela banhoTosa
router.post('/banho/agendar',(req,res)=>{
    let nomeDono = req.body.dono;
    let telefoneDono = req.body.telefone;
    let data = req.body.data;

    BanhoTosa.create({
        nomeDono : nomeDono,
        telDono : telefoneDono,
        dataAgendada : data
    }).then(res.redirect("/painel"))
});
//Editar
router.get('/banho/edit/:id',(req,res)=>{
    let id = req.params.id;
    
    BanhoTosa.findByPk(id).then(cadastros =>{
        if(cadastros != undefined){
            res.render('../views/view/partials/banho/editBanho.ejs',{cadastros:cadastros});
        }else{
            res.redirect('/registros');
        }
    })
});

//Salvar Update dos cadastros
router.post('/banho/update',(req,res)=>{
    let id = req.body.id;
    let nomeDono = req.body.dono;
    let telefoneDono = req.body.telefone;
    let data = req.body.data;

            
    BanhoTosa.update({
        nomeDono : nomeDono,
        telDono : telefoneDono,
        dataAgendada : data
    },{where:
        {id:id}
    }).then(() =>{
            res.redirect('/painel');
        }).catch(Error =>{
            console.log(Error);
        })
});

//Deletar agendamento banho/tosa
router.post('/banho/delete',(req,res) =>{
    let id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){
            BanhoTosa.destroy({
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