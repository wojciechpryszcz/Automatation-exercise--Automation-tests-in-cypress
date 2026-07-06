import PageSelectorRegister from "./PageSelectorRegister";

class PageSelectorActions {
  signup = {
    buttonSignUp() {
      PageSelectorRegister.signup.signUpButton().click();
    },

    buttonLogin() {
      PageSelectorRegister.signup.loginButton().click();
    },
  };

  form = {
    createAccount() {
      PageSelectorRegister.form.createButton().click();
    },
  };

  afterregister = {
    continueButton() {
      PageSelectorRegister.afterregister.continueButton().click();
    },

    deleteAccountButton() {
      PageSelectorRegister.afterregister.deleteAccountButton().click();
    },
  };
}

export default new PageSelectorActions();
