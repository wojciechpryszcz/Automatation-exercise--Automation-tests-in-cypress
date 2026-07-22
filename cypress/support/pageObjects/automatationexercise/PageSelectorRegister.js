class PageSelectorRegister {
  signup = {
    name: () => cy.get('[data-qa="signup-name"]'),
    email: () => cy.get('[data-qa="signup-email"]'),
    signUpButton: () => cy.get('[data-qa="signup-button"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    urlConfirmation: () => cy.url().should("include", "signup"),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    passwordInput: () => cy.get('[data-qa="login-password"]'),
    h2LoginToYourAccount: () =>
      cy.contains("h2", "Login to your account").should("be.visible"),
    h2NewUserSignup: () =>
      cy.contains("h2", "New User Signup").should("be.visible"),
    paragraphInfo: () => cy.get('form[action="/login"] p'),
  };

  form = {
    password: () => cy.get("#password"),
    firstName: () => cy.get("#first_name"),
    lastName: () => cy.get("#last_name"),
    createButton: () => cy.get('[data-qa="create-account"]'),
    company: () => cy.get("#company"),
    address1: () => cy.get("#address1"),
    country: () => cy.get("#country"),
    state: () => cy.get("#state"),
    city: () => cy.get("#city"),
    zipcode: () => cy.get("#zipcode"),
    mobileNumber: () => cy.get("#mobile_number"),
    // itd. dodaj tutaj resztę pól
  };

  afterregister = {
    h2: () => cy.contains("h2", "Account Created!").should("be.visible"),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
    aContainsName: (name) =>
      cy.contains("a", `Logged in as ${name}`).should("be.visible"),
    deleteAccountButton: () => cy.contains("a", "Delete Account").click(),
    deleteConfirmation: () =>
      cy.contains("b", "Account Deleted!").should("be.visible"),
    continueButton: () => cy.get("a.btn.btn-primary"),
    pUserExist: () =>
      cy.contains("p", "Email Address already exist!").should("be.visible"),
  };
}

export default new PageSelectorRegister();
