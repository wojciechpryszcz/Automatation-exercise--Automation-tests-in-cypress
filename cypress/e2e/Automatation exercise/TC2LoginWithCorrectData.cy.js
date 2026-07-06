import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";

import PageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";
import PageSelectorActions from "../../support/pageObjects/automatationexercise/PageSelectorActions";

describe("Login User With correct email and password", () => {
  const register_PO = new Register_PO();
  // const pageSelectorRegister = new PageSelectorRegister();

  it("Should register a new user", () => {
    register_PO.NavigateToUrl();
    PageSelectorRegister.signup.h2LoginToYourAccount();

    PageSelectorRegister.signup.loginName().type(register_PO.testData.email);
    PageSelectorRegister.signup
      .passwordInput()
      .type(register_PO.testData.password);
    PageSelectorActions.signup.buttonLogin();
    PageSelectorRegister.afterregister.aContainsName(register_PO.testData.name);
    // PageSelectorRegister.afterregister.deleteAccountButton();
    // PageSelectorRegister.afterregister.deleteConfirmation();
  });
});
