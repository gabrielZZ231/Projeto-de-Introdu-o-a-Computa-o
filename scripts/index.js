/**
 * Redirect fake
 */
function redirect() {
  setTimeout(() => {
    const userLogin = localStorage.getItem("userLogin");
    /**
     * Verifica se o usuário está logado
     * @type {{user: string, loggedIn: boolean, expiration: string}}
     */
    const user = JSON.parse(userLogin);

    if (user?.loggedIn) {
      location.href = "./pages/home.html";
      return;
    }

    location.href = "./pages/login.html";
  }, 1000);
}
