class PageSelectorHomepage {
  logged = {
    LoggedName: () => {
      cy.get("a").should("contain", "Logged in as").and("contain", "Wojtas");
    },

    logoutButton: () => {
      cy.contains("a", "Logout").should("be.visible").click();
    },
  };
}

export default new PageSelectorHomepage();
