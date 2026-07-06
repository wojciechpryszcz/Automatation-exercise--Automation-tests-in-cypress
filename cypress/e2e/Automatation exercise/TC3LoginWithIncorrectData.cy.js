import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";

import PageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";
import PageSelectorActions from "../../support/pageObjects/automatationexercise/PageSelectorActions";

describe("Login User With incorrect email and password", () => {
  const register_PO = new Register_PO();
  // const pageSelectorRegister = new PageSelectorRegister();

  it("Should register a new user", () => {
    register_PO.NavigateToUrl();
    PageSelectorRegister.signup
      .loginEmail()
      .type(register_PO.testData.falsedata.falseEmail);
    PageSelectorRegister.signup
      .passwordInput()
      .type(register_PO.testData.falsedata.falsePasswod);
    PageSelectorActions.signup.buttonLogin();
    PageSelectorRegister.signup
      .paragraphInfo()
      .should("be.visible")
      .and("contain", "Your email or password is incorrect!");
  });
});
