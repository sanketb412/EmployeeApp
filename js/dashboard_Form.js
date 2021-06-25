window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>First Name</th><th>Last Name</th><th>Email</th>"+
                        "<th>Contact</th><th>Start Date</th><th>Salary</th><th>Actions</th>";
    const innerHtml = `${headerHtml}    
        <tr>
            <td>Sanket</td>
            <td>Bagde</td>
            <td>sanketbagde@gmail.com</td>
            <td>8546523125</td>
            <td>1 Nov 2020</td>
            <td> 300000 </td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                    src="../images/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)"
                    src="../images/create-black-18dp.svg">
            </td>    
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}