let fn = document.getElementById('firstname');
let ln = document.getElementById('lastname');
let dob = document.getElementById('dob');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let password = document.getElementById('password');
let para = document.getElementById('para');
let result;
let flag;

let button = document.getElementById('button');
button.addEventListener('click', myfun);

function myfun(){
    var numbers = /[0-9]/;
    var letters = /^[a-zA-Z]*$/;

    if(fn.value=="" && ln.value=="" && email.value=="" && password.value=="" && email.value=="" && mobile.value==""){
        result = "Please enter the required credentials!";
        para.innerHTML = result;
        para.style.fontSize = "20px";
        para.style.color = "red";
        para.style.marginLeft = "23%";
    }
    else{
        if(fn.type!="text"){
            result = "First name should be text!";
            para.innerHTML = result;
            para.style.fontSize = "20px";
            para.style.color = "red";
            para.style.marginLeft = "18%";
        }
        if(!fn.value.match(letters)){
            result = "First Name should contain only one text value!";
            para.innerHTML = result;
            para.style.fontSize = "20px";
            para.style.color = "red";
            para.style.marginLeft = "18%";
        }
        if(fn.value==""){
            result = "Please enter your First Name!";
            para.innerHTML = result;
            para.style.fontSize = "20px";
            para.style.color = "red";
            para.style.marginLeft = "26%";
        }
        if(ln.type!="text"){
            result = "Last name should be text!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "19%";
        }
        if(!ln.value.match(letters)){
            result = "Last Name should contain only one text value!";
            para.innerHTML = result;
            para.style.fontSize = "20px";
            para.style.color = "red";
            para.style.marginLeft = "18%";
        }
        if(ln.value==""){
            result = "Please enter your Last Name!";
            para.innerHTML = result;
            para.style.fontSize = "20px";
            para.style.color = "red";
            para.style.marginLeft = "27%";
        }
        if(fn.value.match(numbers)){
            result = "First Name should not contain any numbers!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "20%";
        }

        if(email.type!="email"){
            result = "Invalid Email address!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "30%";
        }
        if(email.value==""){
            result = "Please enter your Email!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "30%";
        }
        if(mobile.value.length!=10){
            result = "Please enter the 10 digit mobile number!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "25%";
        }
        if(password.value==""){
            result = "Please enter your Password!";
            para.innerHTML = result;
            para.style.fontSize= "20px";
            para.style.color = "red";
            para.style.marginLeft = "30%";
        }  
    }

    if(fn.type=="text" && fn.value.match(letters) && ln.type=="text" && ln.value.match(letters) && mobile.value.length==10 && email.type=="email"){
        flag = true;
        if(flag===true){
            window.location="blank.html";
        }
    }
    
}

let show = document.getElementById('show');
show.addEventListener('click', fun);

function fun(){
    if(password.type=="password"){
        password.type="text";
    }
    else{
        password.type="password";
    }
}