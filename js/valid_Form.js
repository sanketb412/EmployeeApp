
done = () => {
    //declaring variable to specific id
    let id = document.getElementById("id_Id").value;
    let firstName = document.getElementById("firstName_Id").value;
    let lastName = document.getElementById("lastName_Id").value;
    let email = document.getElementById("email_Id").value;
    let contact = document.getElementById("number_Id").value;
    let date = document.getElementById("day").value;
    let salary = document.getElementById("salary_Id").value;

    //calling Validation function
    let firstNameCheck = validation(firstName, "firstNameError_Id", "First Name Incorrect")
    let lastNameCheck = validation(lastName, "lastNameError_Id", "Last Name Incorrect")
    let emailCheck = validation(email, "emailError_Id", "Email Incorrect")
    let contactCheck = validation(contact, "numberError_Id", "Contact Incorrect")
    let salaryCheck = validation(salary, "salaryError_Id", "fill the Salary")

    if (firstNameCheck && lastNameCheck && emailCheck && contactCheck && salaryCheck) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            data: date,
            salary: salary,
            id: id
        }   
        addEmployee(userData);
    }
}

validation = (value, idError, msg) => {
    if(value.length < 3) {
        document.getElementById(idError).innerText=msg
        return false; 
    } else {
        document.getElementById(idError).innerText= ""
        return true;
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
            window.location.href="../html/employee-dashboard.html"
        },
        error: function (result) {
            console.log(result);
        }
    })
}

