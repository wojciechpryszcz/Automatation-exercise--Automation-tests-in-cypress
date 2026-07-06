class Autostore_HairCare_PO {
  addHaireCareProductToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default Autostore_HairCare_PO;
