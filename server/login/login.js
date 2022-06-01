const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const Funcionarios = require('../model/funcionarios');

//Login

router.post('/login',(req,res)=>{
    let user = req.body.user;
    let password = req.body.password;

    Funcionarios.findOne({where:{userName: user}}).then(user =>{
        if(user == undefined){
            res.redirect('/');
        }else{
            let correct = bcrypt.compareSync(password, user.password);

            if(correct){
                req.session.user ={
                    nome: user.userName,
                    email: user.email,
                    id: user.id
                }
                res.redirect('/painel');
            }else{
                alert("Falha ao logar");
            }
        }
    })
    
});
//Logout
router.get('/logout',(req,res)=>{
    req.session.user = undefined;
    res.redirect('/');
});

module.exports = router;