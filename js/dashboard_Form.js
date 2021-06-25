window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
    empPayrollList = getEmployeeDetails();
    
});

const getEmployeeDetails = () => {
    addEmployee()
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
        type: 'PUT',
        url: 'http://localhost:3000/employees',
        data: empDetails,
        success: function (result){
            console.log("Successfully add");
        },
        error: function (result) {
            console.log(result);
        }
    })
}

const createInnerHtml = () => {
    for(const empPayrollData of empPayrollList) {
        let innerHtml = `${innerHtml}
        <tr>
            <td>${empPayrollData._firstName}</td>
            <td>${empPayrollData._lastName}</td>
            <td>${empPayrollData._email}</td>
            <td>${empPayrollData._contact}</td>
            <td>${empPayrollData._date}</td>
            <td>${empPayrollData._salary}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" wiidth=30%
                    src="../images/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)" width=30%
                    src="../images/create-black-18dp.svg">
            </td>    
        </tr>`;
        document.querySelector('#table-display').innerHTML = innerHtml; 
    }
}

