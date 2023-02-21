(function(){    
    
    const recuperarEmail = document.querySelector(".recuperarEmail")

    const modal = document.querySelector("#div-modal")
    const abrirModal = document.querySelector(".rec-email")
    const fecharModal = document.querySelector(".confirmar")
    
    const email = document.querySelector("#email")
    const recuperarSenha = document.querySelector(".recuperarSenhaCodigo")
    const proximoPasso = document.querySelector(".proximo");

    const trocarSenha = document.querySelector(".novaSenha")

    const senha = document.querySelector("#formSenha")
    const novaSenha = document.querySelector("#formSenhaValidacao")
    const checkbox = document.querySelector(".showPassword")
    
    const alterarSenha = document.querySelector(".alterar-senha")

    const modalRedirect = document.querySelector("#div-modal-redirect")
    const fecharModalRedirect = document.querySelector(".fechar")

    abrirModal.onclick = () => {
        if(
               email.value === "" 
            || email.value.indexOf("@")==-1
            || email.value.indexOf(".")==-1){
                alert("Preencha o e-mail corretamente.")                
        } else {
            if(typeof abrirModal === "undefined" || abrirModal === "null"){
                return;
             }
             modal.style.display = "block"
        }}

    fecharModal.onclick = () => {
        modal.style.display = "none"
        recuperarEmail.style.display = "none"
        recuperarSenha.style.display = "block"
    }

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    window.onload = function () {
        var duration = 60 * 1; // Converter para segundos
            display = document.querySelector('#timer'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
 
    };

    proximoPasso.addEventListener("click", e => {
        e.preventDefault()
            trocarSenha.style.display = "block"
            recuperarSenha.style.display = "none"
        })

        
        alterarSenha.addEventListener("click", (e) => {
            e.preventDefault();
            recuperarEmail.style.display = "none"
            if(senha.value !== novaSenha.value || senha.value === "" || novaSenha.value === "" || senha.value.length > "8" || novaSenha.value.length > "8") {
                alert("As senhas não conferem ou há espaços em branco.")  
            } else {
                modalRedirect.style.display = "block"
                    fecharModalRedirect.onclick = () => {
                        window.location = "login.html"
                }                 
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
 })();