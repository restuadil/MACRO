document.getElementById('register').addEventListener('click', (e) => {
    const fullName = document.getElementById('fullname')
    const email = document.getElementById('registerEmail')
    const password = document.getElementById('registerPassword')
    const rePassword = document.getElementById('reRegisterPassword')

    e.preventDefault()
    if (fullName.value === '' || email.value === '' || password.value === '' || rePassword.value === '') {
        alert('Data Harus Diisi Semua')
    } else if (password.value !== rePassword.value) {
        alert('Password Tidak Sama')
    } else {
        localStorage.setItem('userMacro', fullName.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        const popUp = document.getElementById('success-popup')
        popUp.innerHTML = `<div class="popup">
                                    <div class="popup-content">
                                    <h2>Register Berhasil!</h2>
                                        <p>Silahkan Login.</p>
                                    </div>
                                </div>`;
        setTimeout(() => {
            location.href = 'login.html'
        }, 1000)
    }

})
// document.getElementById('login').addEventListener('click', (e) => {
//     e.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');

//     if (storedEmail && storedPassword && username === storedEmail && password === storedPassword) {
//         const popUp = document.getElementById('success-popup');
//         popUp.innerHTML = `<div class="popup">
//                                 <div class="popup-content">
//                                     <h2>Login Berhasil!</h2>
//                                     <p>Selamat datang di situs kami.</p>
//                                 </div>
//                             </div>`;

//         setTimeout(() => {
//             location.href = 'index.html';
//         }, 1000);
//     } else {
//         alert('Login Gagal');
//     }
// });
