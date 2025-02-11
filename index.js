const usersdatabase = {
    "Millieob" : {
        firstname: "Millie",
        lastName: "Obiora",
        email: "millieobiora@gmail.com",
        accountActivated: true,
        password: "mildred3433"
    },
    "Phillip256" : {
        firstname: "Phillip",
        lastName: "Olubakin",
        email: "phillipolubakin@gmail.com",
        accountActivated: false,
        password: "phillip256"
    },
    "Reuben9778" : {
        firstname: "Reuben",
        lastName: "Ufinabe",
        email: "reubenufinabe@gmail.com",
        accountActivated: false,
        password: "reuben9778"
    },
    "Emeka007" : {
        firstname: "chukwuemeka",
        lastName: "Ikenna",
        email: "chukwuemekaikenna@gmail.com",
        accountActivated: true,
        password: "emekababy007"
    },
    "Austinpowers1" : {
        firstname: "Austin",
        lastName: "Osakwe",
        email: "austinosakwe@gmail.com",
        accountActivated: true,
        password: "austinchukwu224"
    },
    "bernard002" : {
        firstname: "Bernard",
        lastName: "Chike",
        email: "bernardchike004@gmail.com",
        accountActivated: true,
        password: "bernard5279"
    },

}

function DisplayUserDetails(){
    let username = prompt("Enter your username")

    while (validateUsername(username) == false){
        username = prompt("Username not valid. Please enter a username")
    }

    if (username == null){
    return
    }

    //Enter password
    let password = prompt("Choose a password you can remember")

    while (validatePassword(password) == false){
        password = prompt("Password invalid, use combinations greater than 6")
    }

    if (password == null){
    return
    }

    //confirm passowrd
    let passwordConfirm = prompt("confirm your passowrd")

    while(passwordConfirm !== password){
        passwordConfirm = prompt("password incorrect! Please confirm your password again!")
    }

    if (password == null){
        return
    }

    //check if the user database contains the username

    const user = usersdatabase[username]

    if (user == undefined){
        alert("user not found, Please register on the app")
        return
    }
    console.log(user)
    alert(`
            User found with the following details:
            First Name: ${user.firstname}
            Last Name: ${user.lastName}
            Email: ${user.email}
            Account Activated: ${user.accountActivated}
        `)

    //console.log(username, password, passwordConfirm)

}

DisplayUserDetails()
alert("You have come to the end of this program! Goodbye")

//validation of username
function validateUsername(username){
    if (username == null){
        return true
    }
    if (username.length > 10){
        return false
    }else {
        return true
    }
}

//validation of password
function validatePassword(password){
    if (password == null){
        return true
    }
    if (password.length < 6){
        return false
    }else {
        return true
    }    
}

