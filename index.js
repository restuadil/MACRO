const storedEmail = localStorage.getItem('userMacro');

if (storedEmail) {
    const isLogin = document.getElementById('usernameLogin');
    isLogin.innerHTML = `<button class="login"><i class="bi bi-person"></i>${storedEmail}</butto>`
} else {
    const isLogin = document.getElementById('usernameLogin');
    isLogin.innerHTML = `<button class="nav-login"><a href="login.html">Login</a></button>`
}
