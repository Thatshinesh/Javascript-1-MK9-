function Login(){

    let password = document.getElementById('password').value;
    if (password.length <=12) {
        alert('Unsuccessfull, your password needs a Capital letter !!!');
    } else {
        alert('Successfully Login');
    }
}