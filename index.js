const username = document.getElementById('username')
const password = document.getElementById('password')


console.log(username.value)
document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('userMacro', username.value)
    if (password.value === '123') {
        console.log('success')
        const popUp = document.getElementById('success-popup')
        popUp.innerHTML = `<div class="popup">
                                <div class="popup-content">
                                    <h2>Login Berhasil!</h2>
                                    <p>Selamat datang di situs kami.</p>
                                </div>
                            </div>`;
        setTimeout(() => {
            location.href = 'index.html'
        }, 1000)
    } else {
        alert('Login Failed')
    }
});

if (username) {
    const user = document.getElementById('usernameLogin')
    user.innerHTML = `<h1>${username.value}</h1>`
}