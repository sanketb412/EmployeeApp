
let first = document.getElementById('First_name').nodeValue
let last = document.getElementById('Last_name').nodeValue
let email = document.getElementById('E-mail').nodeValue
let contact = document.getElementById('Contact').nodeValue
let date = document.getElementById('Start_Date').nodeValue
let salary = document.getElementById('Salary').nodeValue

let userData = {
    first: first,
    last: last,
    email: email,
    contact: contact,
    date: date,
    salary: salary,
}

$.ajax({
    type: 'post',
    url: 'http://localhost:3000/employees',
    data: userData,
    success: function (result) {
        console.log(result);
    },
    error: function (result) {
        console.log(result);
    }
})