
// // const allUsers = JSON.parse(localStorage.getItem(user)) || [];



// // signup////////////////////////////////

// let userStore = []

// function signupFunction() {
//     let user = {

//         email: document.getElementById("signup-email").value,
//         password: document.getElementById("signup-password").value,
//     }

// var storageObj = JSON.parse(localStorage.getItem("usersss"))


// console.log(typeof storageObj);

//   userStore.forEach((obj) =>{
//     console.log(obj.email);
//     console.log(obj.password);
    
//   });






// // if (user.email == JSON.parse(localStorage.getItem("usersss"))) {
// //     console.log("go away")
// // }else{}













//     userStore.push(user)

//     localStorage.setItem("usersss", JSON.stringify(userStore))



//     // console.log(document.getElementById("signup-email").value)
//     // console.log(document.getElementById("signup-password").value)


//     // console.log(userStore);
//     // console.log(user);
//     document.getElementById("signup-email").value = ""
//     document.getElementById("signup-password").value = ""










// }

// document.getElementById("signup-btn").addEventListener("click", signupFunction)




// // login/////////////////////////////////////////////

// document.getElementById("login-button").addEventListener("click", loginFunction)

// function loginFunction() {

//     var emailValueLogin = document.getElementById("login-email").value;
//     var passwordValueLogin = document.getElementById("login-password").value;

//     let emailMatch = localStorage.getItem("email1",)
//     let passwordMatch = localStorage.getItem("password1",)

//     if (emailValueLogin == emailMatch && passwordValueLogin == passwordMatch) {
//         alert("login Successful")
//         window.open("main.html")
//         document.getElementById("login-password").value = ""
//         document.getElementById("login-email").value = ""


//     } else {

//         alert("wrong email and password")
//     }

// }






let userStore = JSON.parse(localStorage.getItem("usersss")) || [];

function signupFunction() {
    let user = {
        email: document.getElementById("signup-email").value,
        password: document.getElementById("signup-password").value,
    };

    // Check if the email already exists
    let userExists = userStore.some(existingUser => existingUser.email === user.email);

    if (userExists) {
        alert("User already exists with this email");
        document.getElementById("signup-email").value="";
        document.getElementById("signup-password") .value="";
    } else {
        userStore.push(user);
        localStorage.setItem("usersss", JSON.stringify(userStore));
        alert("Signup Successful");

        document.getElementById("signup-email").value="";
        document.getElementById("signup-password").value = "";
    }
}

document.getElementById("signup-btn").addEventListener("click", signupFunction);

// login/////////////////////////////////////////////

document.getElementById("login-button").addEventListener("click", loginFunction);

function loginFunction() {
    var emailValueLogin = document.getElementById("login-email").value;
    var passwordValueLogin = document.getElementById("login-password").value;

    let user = userStore.find(user => user.email === emailValueLogin && user.password === passwordValueLogin);

    if (user) {
        alert("Login Successful");
        window.open("main.html");
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
    } else {
        alert("Wrong email or password");
    }
}
