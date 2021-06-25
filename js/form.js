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
                    <td>${data[i].date}</td>
                    <td>${data[i].salary}</td>
                    <td>
                    <img id="1" onclick="remove(${data[i].id})" alt="delete" width=30% src="../images/delete-black-18dp.svg">
                    <img id="1" onclick="update(this)" alt="edit" width=30% src="../images/create-black-18dp.svg">
                    </td>
                </tr>`;
            $('#table-display').append(row);
        }document.querySelector(".count").textContent = data.length;
    }
}

const remove = (id) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/employees/' + id,
        success: function (result) {
            console.log(result)
            window.location.reload();
            document.querySelector(".count").textContent = data.length;
        },
        error: function (result) {
            console.log(result);
        }
    });
}
