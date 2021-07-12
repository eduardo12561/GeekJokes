const email = document.getElementById('email');
const email1 = document.getElementById('email1');
const password = document.getElementById('password');


document.getElementById('login').addEventListener('click', function() {
    if(!email.value || !email1.value || !password.value) {
        alert("No blank values allowed");
    } else {
        window.location.href = "index.html"
    }
})