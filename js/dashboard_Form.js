window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeeDetails();
    createInnerHtml();
});

const getEmployeeDetails = () => {
    addEmployee(empDetails)
    let empDetails = [
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            date: date,
            salary: salary
        }
    ];
    return empDetails;
}
addEmployee = () => {
    $.ajax ({
        type: 'get',
        url: 'http://localhost:3000/employees',
        data: data,
    })
}

const createInnerHtml = () => {
    const headerHtml = "<th>First Name</th><th>Last Name</th><th>Email</th>"+
                        "<th>Contact</th><th>Start Date</th><th>Salary</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${empPayrollData.firstName}</td>
            <td>${empPayrollData.lastName}</td>
            <td>${empPayrollData.email}</td>
            <td>${empPayrollData.contact}</td>
            <td>${empPayrollData.date}</td>
            <td>${empPayrollData.salary}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" width=30%
                    src="../images/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)" width=30%
                    src="../images/create-black-18dp.svg">
            </td>    
        </tr>`;
        document.querySelector('#table-display').innerHTML = innerHtml; 
    }
}

// const createEmployeeList = () => {
//     addEmployee(userData)
//     let empDetails = [
//         {
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             contact: contact,
//             date: date,
//             salary: salary
//         }
//     ];
//     return empDetails;
// }

