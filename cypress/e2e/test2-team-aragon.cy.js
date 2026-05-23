describe('Mi primer test en el Team Aragón', () => {
  it('Debe cargar la página de ejemplo', () => {
    cy.visit('https://example.cypress.io') // Paso 1
    cy.contains('type').click() // Paso 2
    cy.url().should('include', '/commands/actions') // Paso 3
    cy.get('.action-celular') // Paso 4
      .type('lucas@qa.com') // Paso 5
      .should('have.value', 'lucas@qa.com') // Paso 6
  })
})