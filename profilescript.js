window.onload = function () {

    const storedTokens = Object.keys(localStorage);
    const accessToken = storedTokens.length > 0 ? storedTokens[0] : null;

    if (accessToken) {
        const userData = JSON.parse(localStorage.getItem(accessToken));

        document.getElementById('profileName').textContent = userData.name;
        document.getElementById('profileEmail').textContent = userData.email;
        document.getElementById('profileToken').textContent = accessToken;
        document.getElementById('profilePassword').textContent = userData.password;

    } else {

        console.log('User data not found');
    }
};


document.querySelector('.logout').addEventListener('click', function() 
{
    localStorage.removeItem('user');
    window.location.href = 'index.html';
});