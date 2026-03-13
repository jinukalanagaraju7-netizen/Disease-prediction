function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

var savedUser=localStorage.getItem("username");
var savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

alert("Login Successful");

window.location.href="dashboard.html";

}
else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

}
