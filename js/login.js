const { resolveTxt } = require("dns");

function logar(){
    if(document.getElementById("txtUsuario").value.indexOf('@') > -1){
        var dados={
            email:document.getElementById("txtUsuario").value,
            senha:document.getElementById("txtSenha").value
        }
    
        var pacote={
            method:"POST",
            body:JSON.stringify(dados),
            headers:{
                "Content-type":"application/json"
            }
        }
        
        fetch("http://localhost:8080/loginemail", pacote)
        .then(res => res.json())
        .then(res => {
                localStorage.setItem("user", JSON.stringify(res));
                window.location="selecao.html"
        })  
        .catch(err => {
            window.alert("Utilize um e-mail ou racf válidos. Favor checar sua senha.");
        })
    }
    else{
        var dados={
            racf:document.getElementById("txtUsuario").value,
            senha:document.getElementById("txtSenha").value
        }
    
        var pacote={
            method:"POST",
            body:JSON.stringify(dados),
            headers:{
                "Content-type":"application/json"
            }
        }
        fetch("http://localhost:8080/loginracf", pacote)
        .then(res => res.json())
        .then(res => {
                localStorage.setItem("user", JSON.stringify(res));
                window.location = "selecao.html"
        })
        .catch(err => {
            window.alert("Utilize um e-mail ou racf válidos. Favor checar sua senha.");
        })
    }

    
}