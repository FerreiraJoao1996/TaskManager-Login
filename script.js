(function(){  // VALIDAÇÕES DA TELA DE LOGIN

    const btnlogin = document.querySelector(".login");
    const senha = document.querySelector("#senha");
    const usuario = document.getElementById("usuario");
    const checkbox = document.getElementById("showPassword");
    const newPassword = document.querySelector(".lost-password");
    const novaConta = document.querySelector('.botao-criar')
   ;

   usuarios = {
    user: 'jpfreitass@hotmail.com',
    pass: 'jpfreitass'
   }
    
    checkbox.onclick = () => {
        if(senha.type == "password"){
            senha.type = "text"
        } else {
            senha.type = "password"
        }
    }

    btnlogin.addEventListener("click", () => {
        if(senha.value === usuarios.user || usuario.value === usuarios.pass){
            window.location = "login.html";
        } else {
            alert("Preencha os dados corretamente!")
        }
    })

    newPassword.addEventListener("click", e => {
        e.preventDefault()
        window.location = "nova-senha.html"
    })

    novaConta.addEventListener("click", function(e){
        e.preventDefault();
        window.location = "criar-conta.html";
    })
  
})();
