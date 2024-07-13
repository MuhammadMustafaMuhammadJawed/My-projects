

// signup////////////////////////////////

document.getElementById("signup-btn").addEventListener("click", signupFunction)

function signupFunction() {
 

        var emailValue = document.getElementById("signup-email").value;
        var passwordValue = document.getElementById("signup-password").value;
        
        localStorage.setItem("email1", emailValue)
        localStorage.setItem("password1", passwordValue)
    
    alert("Signup Successful")

console.log(emailValue)
   
}
    
    
    
    


// login/////////////////////////////////////////////

document.getElementById("login-button").addEventListener("click", loginFunction)

function loginFunction() {

    var emailValueLogin = document.getElementById("login-email").value;
    var passwordValueLogin = document.getElementById("login-password").value;
    // console.log(emailValueLogin)
    // console.log(passwordValueLogin)
    let emailMatch = localStorage.getItem("email1", )
    let passwordMatch = localStorage.getItem("password1", )

if (emailValueLogin==emailMatch && passwordValueLogin==passwordMatch){
    alert("login Successful")
    window.open("main.html")
}else{

    alert("wrong email and password")
}

}