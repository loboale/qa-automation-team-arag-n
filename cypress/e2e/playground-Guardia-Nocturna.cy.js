describe('Guardia Nocturna - Playground', () => {
  it('Debe encontrar el titutlo principal del playground', () => {
    cy.visit('https://cypress-playground.vercel.app');
    cy.contains('Cypress Testing Playground').should('be.visible');
  });
});

it('Debe completar el formulario de registro sin usar testids', () => {
  cy.visit('https://cypress-playground.vercel.app/login');
  // La pista dice: usá el placeholder para encontrar los campos.
  // Yo te ayudo con el primer campo, ¡y vos completás los demás!
  cy.contains('Registrarse').click();
  cy.get('input[placeholder="Tu nombre completo"]').type('Alexis el QA');
  // ¿Te animás a agregar los campos de "Email" y "Contraseña"?
  // cy.get('input[placeholder="Email"]').type('alexis@qa.com');
  // cy.get('input[placeholder="Contraseña"]').type('123456');
  // cy.get('button').contains('Registrarse').click();
  cy.get('input[placeholder="tucorreo@ejemplo.com"]').type('alexi@qa.com');
  cy.get('input[placeholder="Contraseña"]').type('123456');
  cy.get('input[placeholder="Confirmar contraseña"]').type('123456');
  cy.get('.checkbox-wrap > input').click();
  cy.get('button').contains('Registrarse').click();
});

it('Debe hacer clic en el botón Siguiente de la tabla y regresar a la pagina de Tablas Principal', () => {
  cy.visit('https://cypress-playground.vercel.app/tables');
  // La tabla con buenas prácticas tiene el texto "Siguiente →"
  //cy.contains('Siguiente').click();
  cy.get('[data-testid="pagination-next"]').click();
  // Después del clic, la página debería mostrar "Página 2 de 5"
  //cy.contains('Página 2 de 5').should('be.visible');
  cy.get('[data-testid="pagination-info"]').should('contain', 'Página 2 de 5');
  cy.contains('Anterior').click();
  //cy.get('[data-testid="pagination-prev"]');
  cy.get('[data-testid="pagination-info"]').should('be.visible');
  cy.contains('Página 1 de 5').should('be.visible');
});

it('Debe domar todos los modales y alertas', () => {
  cy.visit('https://cypress-playground.vercel.app/modals');

  // 1. MODAL SIMPLE (Bug de superposición - lo domaste)
  cy.contains('button', 'Abrir Modal Simple').click();
  cy.get('[data-testid="modal-overlay"]').click({force: true});
  // Hacemos clic fuera, en el fondo del body
  //cy.get('body').click(10, 10);
  cy.wait(500);

  // 2. TOASTS (Ahora con force: true porque el logo lo tapa)
  // Usamos { force: true } para ignorar al logo travieso
  cy.contains('button', 'Toast Éxito').click({ force: true });
  cy.contains('Operación exitósa').should('be.visible');
  cy.wait(1000);

  // 3. ALERTAS DEL NAVEGADOR (Las que sí andan)
  cy.contains('button', 'window.confirm').click({force: true});
  cy.contains('Confirm: Aceptaste').should('be.visible');

  cy.contains('button', 'window.prompt').click({force: true});
  cy.contains('Prompt: Aragón').should('be.visible');
});

it('Llenaremos y comprobaremos el formulario', () => {
  cy.visit('https://cypress-playground.vercel.app/forms');
  
  //1- Llenar un campo con texto usando data-testid
  cy.get('[data-testid="bp-name"]').type('Alexis el QA').should('have.value', 'Alexis el QA');
  cy.get('[data-testid="bp-email"]').type('Alexis@qa.com').should('have.value', 'Alexis@qa.com');
  cy.get('[data-testid="bp-comments"]').type('Con el mejor DT en plena noche de Guardia Nocturna y las mejores practicas jajajaja');
  cy.get('[data-testid="bp-country"]').select("Argentina");
  cy.wait(1000);
  cy.get('[data-testid="bp-gender-male"]').check().should('be.checked');
  cy.get('[data-testid="bp-interest-testing"]').check().should('be.checked');
  cy.get('[data-testid="bp-interest-devops"]').check();
  cy.wait(1000);
  cy.get('[data-testid="bp-experience"]').invoke('val', 5).trigger('change');
  cy.get('[data-testid="bp-birthdate"]').type('1979-03-03');
  cy.get('[data-testid="bp-color"]').invoke('val', '#ff0000').trigger('change');
  cy.get('[data-testid="bp-submit"]').click();
  cy.wait(1000);
  // El broche de oro ninja: verificar que los datos enviados son correctos
  cy.contains('Alexis el QA').should('be.visible');
  cy.contains('Alexis@qa.com').should('be.visible');
  cy.contains('Argentina').should('be.visible');
  cy.contains('Masculino').should('be.visible');
  cy.contains('Testing').should('be.visible');
  cy.contains('DevOps').should('be.visible');

});

it('Debe llenar el formulario de malas prácticas (campo minado)', () => {
  cy.visit('https://cypress-playground.vercel.app/forms');
  
  // 0. Aislamos el contenedor DEL CAMPO MINADO (tu hallazgo ninja)
  cy.get('.border-red-100')
    .within(() => {

      // 1. Nombre
      cy.get('input[placeholder="Ingrese su nombre"]').type('Alexis el QA');
  
      // 2. Email
      cy.get('input[placeholder="Correo electrónico"]').type('Alexis@qa.com');
  
      // 3. País
      cy.get('.dropdown').first().select('Argentina');
  
      // 4. Género (¡click directo al texto!)
      // En lugar de buscar un input y hacer check, hacemos clic en el texto "Masculino".
      // Esto funciona porque el texto está vinculado al radio button.
      cy.contains('Masculino').click();
  
      // 5. Intereses (¡click directo al texto!)
      cy.contains('Testing').click();
      cy.contains('DevOps').click();

      // 6. Botón Enviar
      cy.contains('button', 'Enviar').click();
    });

  // 7. Verificaciones finales
  cy.contains('Alexis el QA').should('be.visible');
  cy.contains('Alexis@qa.com').should('be.visible');
  cy.contains('Argentina').should('be.visible');
  cy.contains('Masculino').should('be.visible');
  cy.contains('Testing').should('be.visible');
  cy.contains('DevOps').should('be.visible');
});
/*
it('Debe llenar el formulario de malas prácticas (campo minado)', () => {
  cy.visit('https://cypress-playground.vercel.app/forms');
  
  // 1. Nombre (ya lo sabés)
  cy.get('input[placeholder="Ingrese su nombre"]').type('Alexis el QA');
  
  // 2. Email (usá el tipo de input)
  cy.get('input[placeholder="Correo electrónico"]').type('Alexis@qa.com');
  
  // 3. País (usá el select)
  cy.get('.dropdown').select('Argentina');
  //cy.get('input[placeholder="Seleccioná un país"]').click().select('Argentina');
  
  // 4. Género (usá el tipo radio)
  cy.get('input[type="radio"]').first().check();
  
  // 5. Intereses (usá el tipo checkbox)
  //cy.get('input[type="checkbox"]').first().check();
  cy.get('.space-y-5').contains('Masculino').click();
  cy.get(':nth-child(5) > .flex-wrap > :nth-child(1) > .accent-gray-600').click();
  cy.get(':nth-child(5) > .flex-wrap > :nth-child(3) > .accent-gray-600').click();

  // 6. Botón Enviar
  cy.get('.btn').contains('Enviar').click();
  cy.contains('Alexis el QA').should('be.visible');
  cy.contains('Alexis@qa.com').should('be.visible');
  cy.contains('Argentina').should('be.visible');
  cy.contains('Masculino').should('be.visible');
  cy.contains('Testing').should('be.visible');
  cy.contains('DevOps').should('be.visible');
  cy.wait(10000);
});
*/