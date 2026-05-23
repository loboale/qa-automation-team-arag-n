describe('Mi propio test de HomiCloud', () => {
  it('Debe buscar el texto HumiCloud', () => {
    cy.visit('https://humicloud.mitiendanube.com/');
    cy.contains('HumiCloud').should('exist');
  })
})