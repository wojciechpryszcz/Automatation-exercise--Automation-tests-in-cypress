import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import pageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";

describe("Verify Test Cases Page", () => {
  const register_PO = new Register_PO();

  it("verify test cases page", () => {
    register_PO.NavigateToUrl();
    pageSelectorRegister.navbar.testCases().click();
    pageSelectorRegister.navbar.testCasesURL();
  });
});
