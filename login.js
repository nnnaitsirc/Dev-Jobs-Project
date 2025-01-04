const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem("users"));
    if (!users || users.length === 0) {
        alert("Email address not registered");
        return;
    }

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem("logged-user", JSON.stringify(foundUser));
        window.location.href = "index.html";
    } else {
        alert("Email address or password are incorect");
    }

    
});



