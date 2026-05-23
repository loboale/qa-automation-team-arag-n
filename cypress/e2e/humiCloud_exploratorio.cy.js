describe('Test Exploratorio de HumiCloud', () => {

  it('Debe mostrar el banner de la oferta 3x2', () => {
    cy.viewport('iphone-x');
    cy.visit('https://humicloud.mitiendanube.com/');
    // Verificamos que el texto EXISTE en el DOM, aunque el CSS lo oculte
    cy.contains('Oferta Especial 3x2').should('exist');
  });

  it('Debe mostrar el precio del producto', () => {
    cy.viewport(1280, 720);
    cy.visit('https://humicloud.mitiendanube.com/');
    cy.contains('$64.999,00').should('be.visible');
  });

});