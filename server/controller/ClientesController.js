const express = require('express');
const router = express.Router();
const Clientes = require('../model/clientes');


//Salvar dados no banco
router.post('/clientes/save',(req,res) =>{
    let nCliente = req.body.nCliente;
    let endCliente = req.body.endCliente;
    let telCliente = req.body.telCliente;
    Clientes.findOne({where:{nome: nCliente}}).then(user =>{
        if(user){
            res.redirect('/painel');
            window.alert("Usuário já cadastrado!")
        }else{
            Clientes.create({
                nome: nCliente,
                endereco: endCliente,
                telefone: telCliente
            }).then(res.redirect("/painel"));
        }
    });
});
//Editar
router.get('/cliente/edit/:id',(req,res)=>{
    let id = req.params.id;
    
    Clientes.findByPk(id).then(cadastros =>{
        if(cadastros != undefined){
            res.render('../views/view/partials/cliente/editClientes.ejs',{cadastros:cadastros});
        }else{
            res.redirect('/registros');
        }
    })
});

//Salvar Update dos cadastros
router.post('/clientes/update',(req,res)=>{
    let id = req.body.id;
    let nCliente = req.body.nCliente;
    let endCliente = req.body.endCliente;
    let telCliente = req.body.telCliente;

            
    Clientes.update({
        nome: nCliente,
        endereco: endCliente,
        telefone: telCliente
    },{where:
        {id:id}
    }).then(() =>{
            res.redirect('/painel');
        }).catch(Error =>{
            console.log(Error);
        })
});

//Deletar cadastros
router.post('/clientes/delete',(req,res) =>{
    let id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){
            Clientes.destroy({
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