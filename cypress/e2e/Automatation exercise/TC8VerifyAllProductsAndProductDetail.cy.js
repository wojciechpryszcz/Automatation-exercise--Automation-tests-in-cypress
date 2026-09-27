import Register_PO from "../../support/pageObjects/automatationexercise/RegisterPO";
import pageSelectorRegister from "../../support/pageObjects/automatationexercise/PageSelectorRegister";

describe("Verify Test Cases Page", () => {
  const register_PO = new Register_PO();

  it("verify test cases page", () => {
    register_PO.NavigateToUrl();
    pageSelectorRegister.navbar.products().click();
    pageSelectorRegister.navbar.productsURL();
    pageSelectorRegister.productsPage.h2AllProducts();
    pageSelectorRegister.productsPage.firstProduct().click();
    // pageSelectorRegister.productDetailPage.h2ProductDetails();
    pageSelectorRegister.productDetailPage.productName();
    pageSelectorRegister.productDetailPage.productCategory();
    pageSelectorRegister.productDetailPage.productPrice();
    pageSelectorRegister.productDetailPage.productAvailability();
    pageSelectorRegister.productDetailPage.productCondition();
    pageSelectorRegister.productDetailPage.productBrand();
  });
});
