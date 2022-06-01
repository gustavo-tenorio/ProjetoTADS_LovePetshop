const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set(bodyParser.json());

//Banco de Dados
const connection = require('./server/database/database')
const funcionarios = require('./server/model/funcionarios');
const clientes = require('./server/model/clientes');
const banhoTosa = require('./server/model/banhoTosa');
const agendamentoVet = require('./server/model/agendamentoVet');

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((Error)=>{
        console.log(Error);
    });
//Session
const session = require('express-session');


app.use(session({
    secret:'sdlaslkdjasldjsajdasjdlasdmasl', cookie:{maxAge:null}, resave:false, saveUninitialized:false    
}));

app.use(function(req,res,next){
    res.locals.user = req.session.user;
    next();
});
//Rotas
const funcionariosController = require('./server/controller/FuncionariosController');
const clientesController = require('./server/controller/ClientesController');
const banhoTosaController = require('./server/controller/banhoTosaController');
const agendamentoVetController = require('./server/controller/AgendamentoVetController');
const login = require('./server/login/login');
const rotas = require('./server/routes/routes');

app.use('/',rotas);
app.use('/',funcionariosController);
app.use('/',clientesController);
app.use('/', banhoTosaController);
app.use('/',agendamentoVetController);
app.use('/',login);
app.get('/',(req,res)=>{res.render('./view/index')});

app.listen('3000',(Error)=>{     
    if(Error){
        console.log(Error);
    }else{
        console.log('Server ON!');
    }
});