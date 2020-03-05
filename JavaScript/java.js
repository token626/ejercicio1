function mensaje(){
    var nameValue = document.getElementById("nombre").value;
    alert("envió" + nameValue);
    }

    function agregar(){

    var lista =document.getElementById("lista");

    var node = document.createElement("h2");
    node.innerHTML = "hola";
    lista.appendChild(node);
    }