
var cEmail = "", cPassword = "", emails = [], passwords = [], isAuthenticated = false

const register = () => {

    let rEmail = document.getElementById("rEmail").value;
    let rPassword = document.getElementById("rPassword").value;
    emails = [...emails, rEmail];  //destructring
    passwords = [...passwords, rPassword]

    //local Storage
    localStorage.setItem("emails", JSON.stringify(emails));

    localStorage.setItem("passwords", JSON.stringify(passwords));  

    document.getElementById("result").innerText = "SuccessFully registerd!";

}
const login = () => {

    let cEmail = document.getElementById("cEmail").value;
    let cPassword = document.getElementById("cPassword").value;

    emails = JSON.parse(localStorage.getItem("emails"));

    passwords = JSON.parse(localStorage.getItem("passwords"));

    for (let i = 0; i < emails.length; i++) {


        if (cEmail == emails[i] && cPassword === passwords[i]) {

            isAuthenticated = true;
            document.getElementById("result").innerText = "SuccessFully logged in!";
            return
        }
        else {
            document.getElementById("result").innerText = "Wrong Email or password!";
        }
    }

}

const logout = () => {
    if (isAuthenticated) {
        document.getElementById("result").innerText = "User is loged out!";
    }else {
        document.getElementById("result").innerText = "User is not loged in yet!";
    }  
}


// function logout() {
    
    // }
    // const logout  = () => {
        
        //  }
        
    // const array = [2, 3,3]   
    // "[2, 3,3]" 
    // JSON.parse( "[2, 3,3]" );
        
        // const printUsers = () => {
        //         if (JSON.parse(localStorage.getItem("emails")) == null) {
        //         emails = emails;
        //     } else {
        //         emails = JSON.parse(localStorage.getItem("emails"));  // get Data from local storage
        //     }
        
        //     if (emails.length === 0) {
        //         result.innerHTML = "Nothing to Display!";
        //     } else {
        //         result.innerHTML = "List of Users is Below here";
        //     }
        //     for (let index = 0; index < emails.length; index++) {
        //         console.log('working')
        //         // result.innerHTML = result.innerHTML + "</br>" + (index + 1) + ") " + emails[index];
        //         document.getElementById("result").innerText = document.getElementById("result").innerText + "</br>" + (index + 1) + ") " + emails[index];
        //     }
        // }





























