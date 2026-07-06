/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("iterate over elements", () => {
  it("Log information of all hair care", () => {
    cy.visit("https://automationexercise.com/");

    cy.get(".single-products").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it.only("Kliknij View Product dla Winter Top", () => {
    cy.visit("https://automationexercise.com/");

    cy.get(".product-image-wrapper").each(($el, index, $list) => {
      if ($el.text().includes("Winter Top")) {
        cy.wrap($el).find("a").contains("View Product").click();
      }
    });
  });
});
