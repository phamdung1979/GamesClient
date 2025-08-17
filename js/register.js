const register = (event) => {
    event.preventDefault();
    
    // Lấy dữ liệu người dùng nhập vào:
    let username = document.getElementById("signup-username").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    // Biểu thức chính quy:
    const lowerCaseLetter = /[a-z]/g;
    const upperCaseLetter = /[A-Z]/g;
    const number = /[0-9]/g;
    // Xác thực dữ liệu:
    if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu chưa khớp");
        return;
    }
    if (password.length < 8) {
        alert("Mật khẩu phải có it nhất 8 kí tự");
        return;
    }
    if (!password.match(lowerCaseLetter)) {
        alert("Mật khẩu phải chứa ít nhất một chữ thường");
        return;
    }
    if (!password.match(upperCaseLetter)) {
        alert("Mật khẩu phải có ít nhất một chữ in hoa");
        return;
    }
    if (!password.match(number)) {
        alert("Mật khẩu phải có ít nhất một chữ số");
        return;
    }
    // Đăng ký:
    let user = {
        username: username,
        email: email,
        password: password
    }

    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};

    if (users[email]) {
        alert("Email đã được đăng ký");
    }else{
        users[email] = user;
        localStorage.setItem("users",JSON.stringify(users));
        alert("Đăng ký thành công!");
        window.location.href = "./index.html";
    }
};

document.getElementById("signup-form").addEventListener("submit",register);