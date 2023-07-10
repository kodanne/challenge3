//global variables
let name = document.getElementById('name')
let email = document.getElementById('email')
let tel = document.getElementById('number')
let smallEmail = document.getElementById('semail')
let smallTel = document.getElementById('stel')
let home = document.getElementById('v-pills-home')
let plan = document.getElementById('v-pills-plan')
let steps = document.querySelectorAll(".main")
let navs = document.querySelectorAll(".nav-link")
let tab = document.querySelector("#v-pills-tabContent")
let thanks = document.querySelector("#confirm")
let stepactive = 0
let navactive = 0

function NextHome() {   
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
    );
    
    let telRegExp = new RegExp(
        "^[0-9.-_]{10}", "g"
    );
    
    if (!emailRegExp.test(email.value) && telRegExp.test(tel.value)) {
        event.preventDefault();
        smallEmail.innerHTML = "Valid Email Required"
        email.classList.add("border-danger")
    }else if(!telRegExp.test(tel.value) && emailRegExp.test(email.value)){
        event.preventDefault();
        smallTel.innerHTML = "Valid Phone Number Required"
        tel.classList.add("border-danger")
    }else if(tel.value == "" && email.value!==""){
        event.preventDefault();
        smallTel.innerHTML = "This field is required"
        tel.classList.add("border-danger")
    }else if(email.value=="" && tel.value!==""){
        event.preventDefault();
        smallEmail.innerHTML = "This field is required"
        email.classList.add("border-danger")
        smallEmail.classList.add("text-danger")
    }else if(email.value=="" && tel.value==""){
        event.preventDefault();
        smallTel.innerHTML = "This field is required"
        smallEmail.innerHTML = "This field is required"
        email.classList.add("border-danger")
        tel.classList.add("border-danger")
        smallEmail.classList.add("text-danger")
        smallTel.classList.add("text-danger")
    }else{
        
        event.preventDefault();
        Next()
        // strong.innerHTML = input.value
        
    }

}
function Next(){
    
    steps[stepactive].classList.remove("show");
    steps[stepactive].classList.remove("active");
    stepactive += 1;
    steps[stepactive].classList.add("active");
    steps[stepactive].classList.add("show");

    navs[navactive].classList.remove("show");
    navs[navactive].classList.remove("active");
    navactive += 1;
    navs[navactive].classList.add("active");
    navs[navactive].classList.add("show");
}
function Prev(){
    steps[stepactive].classList.remove("show");
    steps[stepactive].classList.remove("active");
    stepactive -= 1;
    steps[stepactive].classList.add("active");
    steps[stepactive].classList.add("show");

    navs[navactive].classList.remove("show");
    navs[navactive].classList.remove("active");
    navactive -= 1;
    navs[navactive].classList.add("active");
    navs[navactive].classList.add("show");
}
function Confirm(){
    
    thanks.classList.remove("d-none");
    tab.classList.add("d-none");
    
}
