describe('Certificado de Guardia Nocturna - Team Aragón', () => {
  it('Debe registrar la fecha y hora de esta sesión', () => {
    cy.visit('https://cypress-playground.vercel.app');
    cy.contains('Cypress Testing Playground').should('be.visible');

    // Obtenemos la fecha y hora actual de Argentina
    const fecha = new Date();
    const opciones = { timeZone: 'America/Argentina/Buenos_Aires', dateStyle: 'full', timeStyle: 'long' };
    const fechaArgentina = fecha.toLocaleString('es-AR', opciones);

    // Imprimimos el certificado en la consola de Cypress
    cy.log('🧙‍♂️ Certificado de Guardia Nocturna - Team Aragón');
    cy.log('📅 Fecha y hora en Argentina: ' + fechaArgentina);
    cy.log('👤 QA Engineer: Alexis Aragón Rodriguez');
    cy.log('🎓 DT: Aragón');
    cy.log('🐛 Ticket simbólico: BUG-QA-000 (Registro histórico de prácticas)');
    cy.log('✅ Misión cumplida. Hombro a hombro, siempre.');
  });
});