let name = document.getElementById('name')
let email = document.getElementById('email')
let tel = document.getElementById('number')
let smallTel = document.getElementById('semail')
let smallEmail = document.getElementById('stel')

function Next() {
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
    );
    
    let telRegExp = new RegExp(
        "^[0-9.-_]{10}", "g"
    );
    
    if (!emailRegExp.test(email.value)) {
        event.preventDefault();
        smallEmail.innerHTML = "Valid Email Required"
        document.getElementById("email").classList.add("border border-danger-subtle")
    }else if(!telRegExp.test(tel.value)){
        event.preventDefault();
        smallTel.innerHTML = "Valid Phone Number Required"
        document.getElementById("number").classList.add("border border-danger-subtle")
    }else if(tel.value = ""){
        event.preventDefault();
        smallTel.innerHTML = "This field is required"
        document.getElementById("number").classList.add("border border-danger-subtle")
    }else if(email.value=""){
        event.preventDefault();
        smallEmail.innerHTML = "This field is required"
        document.getElementById("email").classList.add("border border-danger-subtle")
    }else{
        
        event.preventDefault();
        document.getElementById("main").classList.add("d-none")
        document.getElementById("success").classList.remove("d-none")
        strong.innerHTML = input.value
        
    }
}
