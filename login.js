document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mendapatkan data yang tersimpan di localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword && username === storedEmail && password === storedPassword) {
        const popUp = document.getElementById('success-popup');
        popUp.innerHTML = `<div class="popup">
                                <div class="popup-content">
                                    <h2>Login Berhasil!</h2>
                                    <p>Selamat datang di situs kami.</p>
                                </div>
                            </div>`;

        setTimeout(() => {
            location.href = 'index.html';
        }, 1000);
    } else {
        alert('Login Gagal');
    }
});
