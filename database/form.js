document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('login-form');

    // Load saved email and password from localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    if (savedPassword) {
        passwordInput.value = savedPassword;
    }

    // Save email and password to localStorage on form submit
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);

        alert('Signed in successfully!');
        // Here you can add your sign-in logic, e.g., send a request to your server
    });
});
