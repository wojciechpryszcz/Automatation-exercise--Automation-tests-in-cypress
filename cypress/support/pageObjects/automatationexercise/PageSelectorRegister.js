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
    aContactUs: () => cy.get('a[href="/contact_us"]'),
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

  contactUsForm = {
    name: () => cy.get('[data-qa="name"]'),
    email: () => cy.get('[data-qa="email"]'),
    subject: () => cy.get('[data-qa="subject"]'),
    message: () => cy.get('[data-qa="message"]'),
    uploadFile: () => cy.get('input[type="file"]'),
    submitButton: () => cy.get('[data-qa="submit-button"]'),
    h2GetInTouch: () => cy.contains("h2", "Get In Touch").should("be.visible"),
    statusMessage: () =>
      cy
        .contains("Success! Your details have been submitted successfully.")
        .should("be.visible"),
    homeButton: () => cy.contains("a", "Home"),
    windowAlert: () =>
      cy.on("window:alert", (str) => {
        return true;
      }),
  };
}

export default new PageSelectorRegister();
