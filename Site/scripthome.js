function fazerregistro() {
    window.location.href="form.html";
}

//função de verificar credencias admin

function verificarcredencias() {

    var email = document.getElementById('idlogin').value;
    var senha = document.getElementById('idsenha').value;

    if(email == "admin" && senha == "admin"){
        location.href= "./PaginaMedico.html"; 
    }
    else{ 
        alert("Email Ou Senha Incorretos")
    }
}