/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Inspect automation exercise page using chain of commmand", () => {
  it("Click on first item user item header", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath(
      "//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]"
    ).click();
  });
  it("click on the first item using item text", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath(
      "//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]"
    )
      .contains("View Product")
      .click();
  });
  it.only("click on the first item using index", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath(
      "//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='features_items']/div[2]/div[1]"
    )
      .find("h2")
      .eq(0)
      .click();
  });
});
