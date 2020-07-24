function carregarUsuario(){
    var usuarioLogado = localStorage.getItem("user");
    if(!usuarioLogado){
        window.location="index.html";
    } else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("dados").innerHTML=
            "<h6>" + usuarioJson.nome + "&nbsp;" + "(" + usuarioJson.racf + ")" + "</h3>" +
            "<br></h4>"

        document.getElementById("foto").innerHTML=
            "<img width='108' height='108' alt='Imagem não encontrada!' src=images/" + usuarioJson.foto + ">";
    }
}