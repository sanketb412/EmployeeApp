function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/employees',
        success: function (result) {
            insertTable(result);
        },
        error: function (result) {
            console.log(result);
        }
    });

    insertTable = (data) => {
        let row = "";
        for (let i = 0; i < data.length; i++) {
            row =
                `<tr>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].contact}</td>
                    <td>${data[i].salary}</td>
                    <td>
                    <img onclick="remove(${data[i].id})" width=20% src="../images/delete-black-18dp.svg" alt="delete">
                    <img id="employee_Id" src="../images/create-black-18dp.svg" type="button" onclick="openPopUp('${data[i].id}','${data[i].firstName}','${data[i].lastName}','${data[i].email}','${data[i].contact}','${data[i].salary}')"> 
                    </td>
                </tr>`;
                $('#table-display').append(row);
        }
        document.querySelector(".count").textContent = data.length;
        
    }
}
    
var modal = document.getElementById("myModal");

function openPopUp(Id, firstName, lastName, email, contact, salary) {
    modal.style.display = "block";

    document.getElementById("firstName_Id").value = firstName;
    document.getElementById("lastName_Id").value = lastName;
    document.getElementById("email_Id").value = email;
    document.getElementById("number_Id").value = contact;
    document.getElementById("salary_Id").value = salary;
    document.getElementById("employee_Id").value = Id;
}

function submitNewData() {
    let Id = document.getElementById("employee_Id").value;
    let firstName = document.getElementById("firstName_Id").value;
    let lastName = document.getElementById("lastName_Id").value;
    let email = document.getElementById("email_Id").value;
    let contact = document.getElementById("number_Id").value;
    let salary = document.getElementById("salary_Id").value;
    
    let putUserData = {
        Id: Id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        salary: salary,
    }

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/employees/' + Id,
        data: putUserData,
        success: function (result) {
            getData();
        },
        error: function (result) {
            console.log(result);
        }
    });
}

const remove = (id) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/employees/' + id,
        success: function (result) {
            getData();
            document.querySelector(".count").textContent = data.length;
        },
        error: function (result) {
            console.log(result);
        }
    });
}

