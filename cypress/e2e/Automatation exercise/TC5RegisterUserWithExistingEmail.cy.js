import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import PageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";
import PageSelectorActions from "../../support/pageObjects/automatationexercise/PageSelectorActions";
import PageSelectorHomePage from "../../support/pageObjects/automatationexercise/PageSelectorHomePage";

describe("Register User with existing email", () => {
  const register_PO = new Register_PO();
  // const pageSelectorRegister = new PageSelectorRegister();

  it("Register user with existing email", () => {
    register_PO.NavigateToUrl();
    PageSelectorRegister.signup.h2NewUserSignup().should("be.visible");
    PageSelectorRegister.signup
      .name()
      .type(register_PO.testData.constantData.constantName);
    PageSelectorRegister.signup
      .email()
      .type(register_PO.testData.constantData.constantEmail);
    PageSelectorActions.signup.buttonSignUp();
    PageSelectorRegister.afterregister.pUserExist();
  });
});
