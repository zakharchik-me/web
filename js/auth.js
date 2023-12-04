(
  function () {
    window.addEventListener("load", login);
  }
)();

function login () {
  let button = document.getElementById("sign-in");
  let name = document.getElementById("username");
  let password = document.getElementById("password");
  let nameText = "";
  let passwordText = "";
  let storage = window.localStorage;

  name.addEventListener('change', (event) => {nameText = event.target.value;})
  password.addEventListener('change', (event) => {passwordText = event.target.value;})
  button.addEventListener('click', () => {
    storage.setItem("name", nameText);
    storage.setItem("password", passwordText);
  });

  if (storage.getItem("name") != null){
    let headerContent = document.getElementById("header-right-half");
    headerContent.innerHTML =
      `
        <div class="header-nav-item" id="nav-item-1">
          <a href="about-us.html">About us</a>
        </div>
        <div class="header-nav-item" id="nav-item-2">
          <a href="account.html">${storage.getItem("name")}</a>
        </div>
        <div class="header-nav-item" id="nav-item-3">
          <a href="cart.html">Cart</a>
        </div>
      </div>
      <div class="header-nav-item">
        <button id="log-out" type="submit">Log out</button>
  `
    let button = document.getElementById("log-out");
    button.addEventListener('click', () => {
      console.log("work");
      storage.removeItem("name");
      storage.removeItem("password");

      headerContent = document.getElementById("header-right-half");
      headerContent.innerHTML =
        `
          <div class="header-nav-item" id="nav-item-1">
            <a href="../about-us.html">About us</a>
          </div>
          <div id="auth">
            <form id="auth-form">
              <input class="auth-item" placeholder="username" type="text" id="username" name="username" required>
              <input class="auth-item"  placeholder="assword" type="password" id="password" name="password" required>
              <button id="sign-in" class="auth-item" type="submit">Sign in</button>
            </form>
            <p id="auth-quest">Don't have a profile? <a href="register">Sign up</a></p>
          </div>
  `
    });
  }
}