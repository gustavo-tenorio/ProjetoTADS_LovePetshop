const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Funcionarios = require('../model/funcionarios');


router.post('/CadastroFuncionario',(req,res)=>{
    let email = req.body.email;
    let userName = req.body.user;
    let password = req.body.password;

    Funcionarios.findOne({where:{email:email}}).then(registro =>{
        if(registro){
            console.log("Usuário existente");
        }else{
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password , salt);
        
            Funcionarios.create({
                email : email,
                userName : userName,
                password : hash
            }).then(res.redirect('/'));
        }
    });
});



module.exports = router;