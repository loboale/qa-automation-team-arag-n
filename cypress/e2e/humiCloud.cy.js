describe('Test de HumiCloud', () => {
  it('Debe cargar la página principal y verificar el título', () => {
    cy.visit('https://humicloud.mitiendanube.com/');
    cy.title().should('include', 'HumiCloud');
  });

  it('Debe hacer clic en "¡QUIERO MI HUMICLOUD!" y verificar la URL', () => {
    cy.visit('https://humicloud.mitiendanube.com/');
    cy.contains('¡QUIERO MI HUMICLOUD!').click();
    cy.url().should('include', '/productos/');
  });
});