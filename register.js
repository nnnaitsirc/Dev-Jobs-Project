const registerButton = document.querySelector(".register-button");

registerButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Full name validation
    if (name.trim() === '') {
        alert("Please enter your full name.");
        return;
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must have at least 8 characters, a capital letter, and at least 1 special character.");
        return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter the same password in both fields.");
        return;
    }

    const user = {
        email,
        name,
        password,
        confirmPassword,
    };

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = savedUsers.find((user) => user.email === email);
    if (foundUser) {
        alert("Username is already registered");
        return;
    }

    savedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    window.location.href = "index.html";
});



