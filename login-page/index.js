
const email = document.getElementById('email');
const password = document.getElementById('password');


document.getElementById('login').addEventListener('click', function() {
    if(!email.value || !password.value) {
        alert("No blank values allowed");
    } else {
        window.location.href = "../main-page/index.html"
    }
})