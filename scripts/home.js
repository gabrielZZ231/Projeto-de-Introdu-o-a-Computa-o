/**
 * Checa se o usuário está logado
 */
function checkLogin() {
  setInterval(() => {
    const userLogin = localStorage.getItem("userLogin");
    /**
     * Verifica se o usuário está logado
     * @type {{user: string, loggedIn: boolean, expiration: string}}
     */
    const user = JSON.parse(userLogin);

    const expirationTime = user?.expiration ? Number(user?.expiration) : 0;
    if (!user?.loggedIn || expirationTime < +new Date()) {
      localStorage.removeItem("userLogin");
      location.href = "./login.html";
    }
  }, 10 * 1000);
}

document.getElementById("toggleButton").addEventListener("click", function () {
  let sidebar = document.querySelector(".sidebar-home");
  //@ts-ignore
  if (sidebar.style.display === "flex") {
    //@ts-ignore
    sidebar.style.display = "none";
  } else {
    //@ts-ignore
    sidebar.style.display = "flex";
  }
});

function logout() {
  localStorage.removeItem("userLogin");
  location.href = "./login.html";
}
