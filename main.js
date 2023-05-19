function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password  = document.getElementById("contrasena").value;


    if(user == "prueba" && password == "12345"){
        alert("Iniciaste Sesion!")
    }else{
        alert("Datos Incorectos- Intentalo de Nuevo!")

    }
}