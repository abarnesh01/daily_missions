const form = document.getElementById("myForm");
const message = document.getElementById("message");

const toggleBtn = document.getElementById("toggleBtn");
const password = document.getElementById("password");

toggleBtn.addEventListener("click", function(){

    if(password.type=="password"){

        password.type="text";
        toggleBtn.innerHTML="Hide";

    }

    else{

        password.type="password";
        toggleBtn.innerHTML="Show";

    }

});

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let phonePattern=/^[0-9]{10}$/;

if(name==""){

message.innerHTML="Enter Name";
message.className="error";
return;

}

if(!email.match(emailPattern)){

message.innerHTML="Invalid Email";
message.className="error";
return;

}

if(!phone.match(phonePattern)){

message.innerHTML="Phone Number must contain 10 digits";
message.className="error";
return;

}

message.innerHTML="Registration Successful";
message.className="success";

form.reset();

});