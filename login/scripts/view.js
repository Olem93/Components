updateView();

function updateView() {
  // let userName = model.viewState.loggedOutPage.loginName;
  // let userPassword = model.viewState.loggedOutPage.loginPassword;
  let html = /*HTML*/ `
  <input type="text" placeholder="Brukernavn" onchange="model.viewState.loggedOutPage.loginName=this.value">
  <input type="password" placeholder="Passord" onchange="model.viewState.loggedOutPage.loginPassword=this.value">
  <button onclick="logIn()">Logg inn</button>

  `;
  app.innerHTML = html;
}
