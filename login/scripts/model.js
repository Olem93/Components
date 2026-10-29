const model = {
  app: {
    currentPage: "loggedOutPage",
    loggedInUserId: null,
  },
  viewState: {
    loggedOutPage: {
      loginName: null,
      loginPassword: null,
    },
    loggedInPage: {
      profileStats: null,
    },
  },

  userProfile: [
    {
      userID: 1,
      userName: "Olem",
      passWord: "1234", //Kun til testing
      email: "olemaroverdal@getacademy.no",
      firstName: "Ole Martin",
      lastName: "Øverdal",
    },
  ],
};
