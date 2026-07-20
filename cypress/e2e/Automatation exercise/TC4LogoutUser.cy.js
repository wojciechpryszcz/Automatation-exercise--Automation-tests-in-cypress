import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import PageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";
import PageSelectorActions from "../../support/pageObjects/automatationexercise/PageSelectorActions";
import PageSelectorHomePage from "../../support/pageObjects/automatationexercise/PageSelectorHomePage";

describe("Logout User", () => {
  const register_PO = new Register_PO();
  // const pageSelectorRegister = new PageSelectorRegister();

  it("Logout user", () => {
    register_PO.NavigateToUrl();
    PageSelectorRegister.signup.h2LoginToYourAccount().should("be.visible");
    PageSelectorRegister.signup
      .loginEmail()
      .type(register_PO.testData.constantData.constantEmail);
    PageSelectorRegister.signup
      .passwordInput()
      .type(register_PO.testData.constantData.constantPassword);
    PageSelectorActions.signup.buttonLogin();
    PageSelectorHomePage.logged.LoggedName();
    PageSelectorHomePage.logged.logoutButton();
  });
});
