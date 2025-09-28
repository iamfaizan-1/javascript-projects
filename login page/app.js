
function signup() {
  var email = document.getElementById("semail").value;
  var password = document.getElementById("spassword").value;
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)

  location.href = "./login.html"

  // sessionStorage.setItem("email", email)
  // sessionStorage.setItem("password", password)
}


function login(){

var email = document.getElementById("lemail").value
var password = document.getElementById("lpassword").value


if(localStorage.getItem("email") == email && localStorage.getItem("password") == password ){

    alert("login successful");

    location.href = "./index.html";

}

else{

    alert("Wrong email or password")
}

}