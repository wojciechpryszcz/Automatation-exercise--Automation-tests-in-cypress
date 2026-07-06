/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Case 1: Register User", () => {
  it("Navigate to Url", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath("//a[normalize-space()='Home']").should("be.visible");
    cy.xpath("//a[normalize-space()='Signup / Login']").click();
    cy.xpath("//h2[normalize-space()='New User Signup!']").should("be.visible");
    cy.xpath("//input[@data-qa='signup-name']").type("Wojtas");
    cy.xpath("//input[@data-qa='signup-email']").type(
      "frywlljtrvluczscig@nespj.com"
    );
    cy.xpath("//button[@data-qa='signup-button']").click();
    cy.xpath("//b[normalize-space()='Enter Account Information']").should(
      "be.visible"
    );
    cy.xpath("//input[@id='id_gender2']").check();
    cy.xpath("//input[@id='password']").type("Password123");
    cy.xpath("//select[@id='days']").select("10");
    cy.xpath("//select[@id='months']").select("May");
    cy.xpath("//select[@id='years']").select("1990");
    cy.xpath("//input[@id='newsletter']").check();
    cy.xpath("//input[@id='optin']").check();
    cy.xpath("//input[@id='first_name']").type("Wojtas");
    cy.xpath("//input[@id='last_name']").type("tester");
    cy.xpath("//input[@id='company']").type("Testowa firma");
    cy.xpath("//input[@id='address1']").type("Testowa 12");
    cy.xpath("//input[@id='state']").type("Dolnoslaskie");
    cy.xpath("//select[@id='country']").select("Canada");
    cy.xpath("//input[@id='city']").type("Wroclaw");
    cy.xpath("//input[@id='zipcode']").type("55-330");
    cy.xpath("//input[@id='mobile_number']").type("123456789");
    cy.xpath("//button[@data-qa='create-account']").click();
    cy.xpath("//b[normalize-space()='Account Created!']").should("be.visible");
    cy.xpath("//a[normalize-space()='Continue']").click();
    cy.xpath("//a[normalize-space()='Logged in as Wojtas']").should(
      "be.visible"
    );
    cy.xpath("//a[normalize-space()='Delete Account']").click();
    cy.xpath("//b[normalize-space()='Account Deleted!']").should("be.visible");
    cy.xpath("//a[@class='btn btn-primary']").click();
  });
});
