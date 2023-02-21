const formulario 			= document.querySelector("#formulario")

const formNome				= document.querySelector("#formNome");
let nomeInvalido 			= document.querySelector(".nomeInvalido")

const formEmail 			= document.querySelector("#formEmail");
let emailInvalido 			= document.querySelector(".emailInvalido");

const formSenha 			= document.querySelector('#formSenha');
const formSenhaValidacao 	= document.querySelector("#formSenhaConfirmacao");

const checkbox 				= document.getElementById("showPassword");
let senhaInvalida 			= document.querySelector(".senhaInvalida")

const formMidias 			= document.getElementById("formMidias");
let OptionTexto 			= formMidias.options[formMidias.selectedIndex].text;
var OptionValor 			= formMidias.options[formMidias.selectedIndex].value;

const formCadastrar 				= document.querySelector("#formCadastrar")


const fecharModal = document.querySelector(".confirmar")
const modalRedirect = document.querySelector("#div-modal-redirect")

formulario.addEventListener("submit", e => {
	e.preventDefault();
	if(formNome.value == ""){
		nomeInvalido.style.display = "block";
		return;
	}

	if(formEmail.value === "" || formEmail.value.indexOf("@") ==-1 || formEmail.value.indexOf(".") ==-1){
		emailInvalido.style.display = "block";
		return;
	}

	if(!validarSenha(formSenha.value, 8)){
		if(formSenha != formSenhaValidacao || formSenha === "" || formSenhaValidacao === "") {
		senhaInvalida.style.display = "block";		
		return;
		}	
		return;
	}

	formulario.submit();
	window.location = "login.html";	
})

formNome.addEventListener("keydown", function(e){
	e.preventDefault();
	if (e.key >= "0" && e.key <= "9" && formNome.value === "") {			
	}
})

function validarSenha(senha, minDigits){
	if(senha.length >= minDigits ){
		return true;
	}
	return false;
}

checkbox.onclick = () => {
	if(formSenha.type == "password" || formSenhaValidacao == "password"){
		formSenha.type = "text";
		formSenhaValidacao.type = "text"
	} else {
		formSenha.type = "password";
		formSenhaValidacao.type = "password";
	}
}
	
function mascara(telefone){ 
	if(telefone.value.length == 0)
		telefone.value = '(' + telefone.value;
	if(telefone.value.length == 3)
		telefone.value = telefone.value + ') ';

	if(telefone.value.length == 10)
		telefone.value = telefone.value + '-';
}
