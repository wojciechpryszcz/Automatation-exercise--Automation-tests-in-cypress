import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import pageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";

describe("Contact Us Form- testing", () => {
  const register_PO = new Register_PO();

  it("contact us form- testing", () => {
    register_PO.NavigateToUrl();
    pageSelectorRegister.signup.aContactUs().click();
    pageSelectorRegister.contactUsForm.h2GetInTouch().should("be.visible");
    pageSelectorRegister.contactUsForm.name().type(register_PO.testData.name);
    pageSelectorRegister.contactUsForm.email().type(register_PO.testData.email);
    pageSelectorRegister.contactUsForm.subject().type("Test subject");
    pageSelectorRegister.contactUsForm.message().type("Test message");
    pageSelectorRegister.contactUsForm
      .uploadFile()
      .selectFile("cypress/fixtures/testfile.txt");
    pageSelectorRegister.contactUsForm.submitButton().click();
    pageSelectorRegister.contactUsForm.statusMessage();
  });
});
