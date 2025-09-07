const headerAccount = document.getElementById("account_header");

function logout(){
    localStorage.removeItem("loggedIn");

    document.getElementById("account_header").innerHTML = `<a id="log_in_btn" class="nav-link nav-button" href="./login.html">Đăng xuất</a>`;
    window.location.href="login.html";
};

headerAccount.addEventListener("click", logout);