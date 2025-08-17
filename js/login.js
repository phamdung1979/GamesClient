const login = (event) => {
    event.preventDefault();

    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập tên tài khoản và mật khẩu");
        return;
    }

    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};

    let storedUser = users[email];

    if (storedUser && storedUser.password === password) {
        alert("Đăng nhập thành công!");
        window.location.href = "./index.html";
    }else{
        alert("Email hoặc mật khẩu chưa đúng")
    }
};

document.getElementById("login-form").addEventListener("submit",login);