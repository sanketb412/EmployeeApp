// document.getElementById("firstName").oninput = function () { 
//     var regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
//     if(regex.test(this.value)) {
//         document.getElementById('firstNameError').innerText=""
//     } else {
//         document.getElementById('firstNameError').innerText="First Name Incorrect"
//     }
// }

// document.getElementById("lastName").oninput = function () { 
//     var regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
//     if(regex.test(this.value)) {
//         document.getElementById('lastNameError').innerText=""
//     } else {
//         document.getElementById('lastNameError').innerText="Last Name Incorrect"
//     }
// }

// document.getElementById("email").oninput = function () { 
//     var regex = RegExp('^([a-zA-Z]{3,}([+_.-][a-z])*)+@[a-z]+.com$');
//     if(regex.test(this.value)) {
//         document.getElementById('emailError').innerText=""
//     } else {
//         document.getElementById('emailError').innerText="Email Incorrect"
//     }
// }

// document.getElementById("number").oninput = function () { 
//     var regex = RegExp('^([789]{1}[0-9]{9})$');
//     if(regex.test(this.value)) {
//         document.getElementById('numberError').innerText=""
//     } else {
//         document.getElementById('numberError').innerText="contact Incorrect"
//     }
// }

// document.getElementById("salary").oninput = function () { 
//     var regex = RegExp('^[0-9]{1,}$');
//     if(regex.test(this.value)) {
//         document.getElementById('salaryError').innerText=""
//     } else {
//         document.getElementById('salaryError').innerText="fill the salary"
//     }
// }

let valid = false;

Done = () => {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("number").value;
    let salary = document.getElementById("salary").value;

    validation(firstName, "firstNameError", "First Name Incorrect")
    validation(lastName, "lastNameError", "Last Name Incorrect")
    validation(email, "emailError", "Email Incorrect")
    validation(contact, "numberError", "Contact Incorrect")
    validation(salary, "salaryError", "fill the Salary")

    if(valid) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            salary: salary
        }
        window.alert('From valid');
        addEmployee(userData)
    } else {
        window.alert('Form Invalid');
    }
}

validation = (value, id, msg) => {
    if(value.length < 3) {
        valid = false;
        document.getElementById(id).innerText=msg
    } else {
        valid = true;
        document.getElementById(id).innerText= ""
    }
}

addEmployee = (data) => {
    ajaxCalling('post', 'http://localhost:3000/employees', data)
}

ajaxCalling = (type, url, data) => {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: function (result) {
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    })
}