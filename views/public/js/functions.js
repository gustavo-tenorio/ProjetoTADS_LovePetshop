
//Botões navbar
const btnVeterinario = document.getElementById("btnVeterinario");
const btnBanho = document.getElementById("btnBanho");
const btnHome = document.getElementById("btnHome")
const btnClientes = document.getElementById("btnClientes");

//Botões para acessar página de dados cadastrados
const btnShowClientes = document.getElementById("btnShowClientes");
const btnShowBanho = document.getElementById("btnShowBanho");
const btnShowAgendamentos = document.getElementById("btnShowAgendamentos");
const btnEditarClientes = document.getElementById("btnEditarClientes");

//Páginas do painel
const homePage = document.getElementById("home");
const agendamentoPage = document.getElementById("agendamento");
const banhoPage = document.getElementById("banho");
const clientesPage = document.getElementById("clientes");

//Página de dados
const clientesCadastrados = document.getElementById("clientePage");
const banhoAgendadoPage = document.getElementById("banhoPage");
const consultaAgendada = document.getElementById("agendamentoPage");


//Eventos para alterar entre as páginas do painel
btnVeterinario.addEventListener("click", showAgendamento);
btnBanho.addEventListener("click", showBanho);
btnHome.addEventListener("click", showHome);
btnClientes.addEventListener("click",showClientesScreen);
btnShowClientes.addEventListener("click",showClientesCadastrados);
btnShowBanho.addEventListener("click", showBanhoAgendado)
btnShowAgendamentos.addEventListener("click", showConsultaCadastradas);
btnEditarClientes.addEventListener("click", showEditarClientes);



//Funções alterar páginas painel
function showAgendamento(){
    agendamentoPage.style.display = "block";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    clientesPage.style.display = "none";
    clientesCadastrados.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";

}

function showBanho(){
    banhoPage.style.display = "block";
    agendamentoPage.style.display = "none";
    homePage.style.display = "none";
    clientesPage.style.display = "none";
    clientesCadastrados.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";

}
function showHome(){
    homePage.style.display = "block";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    clientesPage.style.display = "none";
    clientesCadastrados.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";
    
}
function showClientesScreen(){
    clientesPage.style.display = "block";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    clientesCadastrados.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";
}

function showClientesCadastrados (){

    clientesCadastrados.style.display = "block";
    clientesPage.style.display = "none";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";
}
function showBanhoAgendado(){
    
    banhoAgendadoPage.style.display = "block";
    clientesCadastrados.style.display = "none";
    clientesPage.style.display = "none";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    consultaAgendada.style.display = "none";
    editarClientes.style.display = "none";

}
function showConsultaCadastradas(){
    consultaAgendada.style.display = "block";
    banhoAgendadoPage.style.display = "none";
    clientesCadastrados.style.display = "none";
    clientesPage.style.display = "none";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    editarClientes.style.display = "none";

}
function showEditarClientes(){
    editarClientes.style.display = "block";
    consultaAgendada.style.display = "none";
    banhoAgendadoPage.style.display = "none";
    clientesCadastrados.style.display = "none";
    clientesPage.style.display = "none";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";

}




function showRegisterScreen () {
    let wrapper = document.querySelector(".wrapper");
    let wrapper_cadastro = document.querySelector('.wrapper_cadastro');
    
    if(wrapper.className == "wrapper" && wrapper_cadastro.className == "wrapper_cadastro"){
        wrapper.classList.add('wrapper_off');
        wrapper_cadastro.classList.add('wrapper_cadastro_active');
    }
    
}


function backforLogin(){
    
    let wrapper = document.querySelector(".wrapper");
    let wrapper_cadastro = document.querySelector('.wrapper_cadastro');

    wrapper.classList.remove('wrapper_off')
    wrapper_cadastro.classList.remove('wrapper_cadastro_active')
}