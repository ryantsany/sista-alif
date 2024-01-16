function login(){
    let userName = document.getElementById("inputUsername")
    let password = document.getElementById("inputPassword")
    let form = document.getElementById("login-form")
    
    if(userName.value == "alif" && password.value == "alif"){
        form.setAttribute("action", "index.html")
    } else{
        alert("login invalid!")
    }
}