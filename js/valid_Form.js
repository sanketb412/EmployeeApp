
document.getElementById("firstName").oninput = function () { 
    var regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(regex.test(this.value)) {
        document.getElementById('firstNameError').innerText=""
    } else {
        document.getElementById('firstNameError').innerText="First Name Incorrect"
    }
}   