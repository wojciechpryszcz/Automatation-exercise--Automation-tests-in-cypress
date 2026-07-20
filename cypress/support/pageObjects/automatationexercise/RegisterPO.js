class Register_PO {
  testData = {
    name: "Wojtas",
    password: "Password123",
    email: "wojtas.tester@example.com",
    dateOfBirth: {
      day: "10",
      month: "May",
      year: "1990",
    },
    address: {
      firstName: "Wojtas",
      lastName: "Tester",
      company: "Testowa Firma",
      address1: "Testowa 12",
      country: "Canada",
      state: "Dolnoslaskie",
      city: "Wroclaw",
      zipcode: "55-330",
      mobileNumber: "123456789",
    },

    falsedata: {
      falseEmail: "falsetest@gmail.com",
      falsePasswod: "falsepassword",
    },

    constantData: {
      constantEmail: "constant.test@example.com",
      constantPassword: "ConstantPassword123",
    },
  };

  NavigateToUrl() {
    cy.visit("https://automationexercise.com/");
    cy.contains("a", "Home").should("be.visible");

    cy.get("a[href='/login']").click();
    cy.contains("h2", "New User Signup!").should("be.visible");
  }
}

export default Register_PO;
