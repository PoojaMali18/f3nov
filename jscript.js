const formElement = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const errorMessage = document.getElementById('errorMessage');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (name !== '' && email !== '' && password !== '' && password === confirm) {
        const accessToken = generateAccessToken();

        const userData = {
            name: name,
            email: email,
            password: password,
            confirm: confirm
        };

        localStorage.setItem(accessToken, JSON.stringify(userData));

        window.location.href = 'profile.html';
    } else {
        errorMessage.style.display = 'block';
    }
});







const generateAccessToken = () => {
    const tokenLength = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';

    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        accessToken += characters.charAt(randomIndex);
    }

    return accessToken;
};
