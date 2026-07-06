import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import PageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister"; // Twój nowy plik
import PageSelectorActions from "../../support/pageObjects/automatationexercise/PageSelectorActions";

describe("Test Case 1: Register User", () => {
  const register_PO = new Register_PO();

  it("Should register a new user", () => {
    register_PO.NavigateToUrl();

    PageSelectorRegister.signup.name().type(register_PO.testData.name);
    PageSelectorRegister.signup.email().type(register_PO.testData.email);
    PageSelectorActions.signup.buttonSignUp();
    PageSelectorRegister.signup.urlConfirmation();
    PageSelectorRegister.form.password().type(register_PO.testData.password);
    PageSelectorRegister.form
      .firstName()
      .type(register_PO.testData.address.firstName);
    PageSelectorRegister.form
      .lastName()
      .type(register_PO.testData.address.lastName);
    PageSelectorRegister.form
      .company()
      .type(register_PO.testData.address.company);
    PageSelectorRegister.form
      .address1()
      .type(register_PO.testData.address.address1);
    PageSelectorRegister.form
      .country()
      .select(register_PO.testData.address.country);
    PageSelectorRegister.form.state().type(register_PO.testData.address.state);
    PageSelectorRegister.form.city().type(register_PO.testData.address.city);
    PageSelectorRegister.form
      .zipcode()
      .type(register_PO.testData.address.zipcode);
    PageSelectorRegister.form
      .mobileNumber()
      .type(register_PO.testData.address.mobileNumber);
    PageSelectorActions.form.createAccount();
    PageSelectorRegister.afterregister.h2().should("be.visible");
    PageSelectorActions.afterregister.continueButton();
    PageSelectorRegister.afterregister.aContainsName(register_PO.testData.name);
    PageSelectorActions.afterregister.deleteAccountButton();
    PageSelectorRegister.afterregister
      .deleteConfirmation()
      .should("be.visible");
    PageSelectorActions.afterregister.continueButton();
  });
});
