/**
 * Função responsável por logar o usuário
 */
function logar() {
  //@ts-ignore
  const email = document.getElementById("email").value;
  //@ts-ignore
  const password = document.getElementById("password").value;

  if (email == "admin@admin.com" && password == "admin") {
    const currentTime = new Date().getTime();
    const addExpirationTime = currentTime + 10 * 60 * 1000;
    const expiration = (+new Date(addExpirationTime)).toString();

    /**
     * @type {{user: string, loggedIn: boolean, expiration: string}}
     */
    const userLogin = {
      user: email,
      loggedIn: true,
      expiration: expiration,
    };
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    location.href = "../pages/home.html";
  } else {
    location.href = "../pages/login.html";
    alert("Username or password is incorrect. Try again!");
  }
}
