updateView();

function updateView() {
  const page = model.viewState.loggedOutPage;
  let html = "";
  if (model.app.currentPage === "loggedInPage") {
    html = /*HTML*/ `
    <button onclick="logOut()">Logg ut</button>
    <p>${page.loginMessage ?? ""}</p>
    `;
  } else {
    html = /*HTML*/ `
  <input type="text" placeholder="Brukernavn" onchange="model.viewState.loggedOutPage.loginName=this.value">
  <input type="password" placeholder="Passord" onchange="model.viewState.loggedOutPage.loginPassword=this.value">
  <button onclick="logIn()">Logg inn</button>
  <p>${model.viewState.loggedOutPage.loginMessage ?? ""}</p>

  `;
  }
  app.innerHTML = html;
}
