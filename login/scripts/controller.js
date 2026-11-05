function logIn() {
  const page = model.viewState.loggedOutPage;

  for (let i = 0; i < model.userProfile.length; i++) {
    const user = model.userProfile[i];
    if (
      user.userName === page.loginName &&
      user.passWord === page.loginPassword
    ) {
      model.app.loggedInUserId = user.userID;
      model.app.currentPage = "loggedInPage";
      page.loginMessage = "Du er logget inn";
      updateView();
      return;
    }
  }

  page.loginMessage = "Feil brukernavn eller passord";
  updateView();
}

function logOut() {
  model.app.loggedInUserId = null;
  model.app.currentPage = "loggedOutPage";
  model.viewState.loggedOutPage.loginMessage = null;
  updateView();
}
