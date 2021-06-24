
document.getElementById("firstName").oninput = function () { 
    var regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(regex.test(this.value)) {
        document.getElementById('firstNameError').innerText=""
    } else {
        document.getElementById('firstNameError').innerText="First Name Incorrect"
    }
}

document.getElementById("lastName").oninput = function () { 
    var regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(regex.test(this.value)) {
        document.getElementById('lastNameError').innerText=""
    } else {
        document.getElementById('lastNameError').innerText="Last Name Incorrect"
    }
}

document.getElementById("email").oninput = function () { 
    var regex = RegExp('^([a-zA-Z]{3,}([+_.-][a-z])*)+@[a-z]+.com$');
    if(regex.test(this.value)) {
        document.getElementById('emailError').innerText=""
    } else {
        document.getElementById('emailError').innerText="Email Incorrect"
    }
}

document.getElementById("number").oninput = function () { 
    var regex = RegExp('^([789]{1}[0-9]{9})$');
    if(regex.test(this.value)) {
        document.getElementById('numberError').innerText=""
    } else {
        document.getElementById('numberError').innerText="contact Incorrect"
    }
}

document.getElementById("salary").oninput = function () { 
    var regex = RegExp('^[0-9]{1,}$');
    if(regex.test(this.value)) {
        document.getElementById('salaryError').innerText=""
    } else {
        document.getElementById('salaryError').innerText="fill the salary"
    }
}