document.getElementById('log').addEventListener('click', press);

function press() {
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value;
    if(username == 'user' && password == 'pass' ) {
        alert ("Correct!");
    } else if(username == 'user' && password != 'pass'){
        alert("False! Password is incorrect");
    } else if(username != 'user' && password == 'pass') {
        alert("False! Username is incorrect");
    } else {
        alert("False! Both are incorrect");
    }
}