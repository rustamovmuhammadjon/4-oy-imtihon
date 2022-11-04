let elLogin = document.querySelector('.login-btn');
let elForm = document.querySelector('.form-login-none');
let elUsernameInp = document.querySelector('.username');
let elPasswordInp = document.querySelector('.password');
let elLoginButton = document.querySelector('.input-login-btn');


elLogin.addEventListener('click', () => {
    elForm.classList.remove('form-login-none');
    elForm.classList.add('form-login');
});


elLoginButton.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        let username = elUsernameInp.value;
        let password = elPasswordInp.value;
        if (username !== '' && password !== '') {
            let auth = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            let res = await auth.json();
            if (res.token) {
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('userId', res.id);
                location = 'users.html'
            } else {
                localStorage.removeItem('access_token');
                location.reload();
            }
        }
    } catch (error) {
        console.log(error);
    }
});

// kminchelle
// 0lelplR