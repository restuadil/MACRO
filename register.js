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

