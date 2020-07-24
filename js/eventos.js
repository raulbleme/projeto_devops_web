function gerar(){

    var usuario = localStorage.getItem("user");
    if(!usuario){
        window.location="index.html"
    }
    else{
        fetch("http://localhost:8080/relatorioeventos", {
            method:"POST",
            body:JSON.stringify({
                inicio:document.getElementById("txtDataInicio").value,
                fim:document.getElementById("txtDataFim").value
            }),
            headers:{
            "Content-type":"application/json"
        }})
            .then(res => res.json())
            .then(res => popularTabela(res));
    }
    
    function popularTabela(lista){
    var strEventos = 
        "<div class='row'> <div class='col-12'>" +
            "<table border='1' cellpadding='5' width='80%' align='center'>" +
            "<tr>" +
                "<td>Data</td>" +
                "<td>Alerta</td>" +
                "<td>Equipamento</td>" +
            "</tr>";        
            
    for (cont=0; cont<lista.length; cont++){
        strEventos += 
            "<tr>" +
            "<td>" + lista[cont].data + "</td>" +
            "<td>" + lista[cont].nome + "</td>" +
            "<td>" + lista[cont].hostname + "</td>" +
            "</tr>";
    }

    strEventos += "</table></div></div>";
    document.getElementById("eventos").innerHTML = strEventos;
}
}