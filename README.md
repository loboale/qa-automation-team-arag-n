# QA Automation - Team Aragón 🧙‍♂️

Proyecto de prácticas de **QA Automation** con [Cypress](https://www.cypress.io/), desarrollado como parte del programa **XAcademy QA Automation 2026** y las guardias nocturnas del **Team Aragón**.

## 🚀 ¿Qué es este proyecto?

Este repositorio contiene tests automatizados end-to-end (E2E) escritos en **JavaScript** con **Cypress**, aplicados sobre el playground oficial de XAcademy y la tienda online **HumiCloud** (actualmente fuera de línea).

Cada test demuestra habilidades de testing automatizado, desde selectores básicos hasta estrategias avanzadas como `within()`, `force: true`, y manejo de formularios sin buenas prácticas.

## 🛠️ Herramientas utilizadas

- **Cypress** v14.x - Framework de testing E2E
- **Node.js** v24.13.0
- **npm** v11.6.2
- **JavaScript** (ES6)
- **Git** y **GitHub** para control de versiones
- **Visual Studio Code** como editor principal
- **Trello** para gestión de tickets
- **Excel** para documentación de casos de prueba

## 📂 Estructura del proyecto
```text
qa-automation-team-arag-n/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── humiCloud.cy.js
│   │   ├── humiCloud_exploratorio.cy.js
│   │   ├── miPropioTest.cy.js
│   │   ├── playground-Guardia-Nocturna.cy.js
│   │   └── test2-team-aragon.cy.js
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md


## 🧪 Tests incluidos

### 🏪 HumiCloud (tienda real - actualmente fuera de línea)

> **Nota:** La tienda https://humicloud.mitiendanube.com/ ya no está operativa (cerró en mayo de 2026). Los tests se mantienen como evidencia de testing sobre un proyecto real.

| Test | Descripción | Estado |
|:---|:---|:---:|
| `humiCloud.cy.js` | Carga de la página principal, verificación del título, clic en botón "¡QUIERO MI HUMICLOUD!" y verificación de URL. | ✅ |
| `humiCloud_exploratorio.cy.js` | Test exploratorio: verifica presencia del banner de oferta 3x2, precio del producto ($64.999,00) y (originalmente) botón de WhatsApp. Encontró bug de `display: none` en el banner. | ✅ |

### 🎮 Cypress Testing Playground (XAcademy)

| Test | Descripción | Estado |
|:---|:---|:---:|
| `playground-Guardia-Nocturna.cy.js` | Batería principal de tests: | |
| - Título del playground | Verifica que el título "Cypress Testing Playground" sea visible. | ✅ |
| - Formulario de registro | Completa el formulario sin usar `data-testid`, usando solo `placeholder`. | ✅ |
| - Tabla de datos | Navega por la paginación (Siguiente/Anterior) y verifica el cambio de página. | ✅ |
| - Modales y alertas | Abre y cierra modales (con bug de superposición detectado), prueba toasts y alertas del navegador. | ✅ |
| - Formulario de buenas prácticas | Llena todos los campos usando `data-testid` y envía el formulario. | ✅ |
| - Formulario de malas prácticas (campo minado) | Llena el formulario sin `data-testid`, usando `placeholder`, `within()`, `contains()` y selectores de atributo. ¡El más desafiante! | ✅ |

## 🐛 Bugs encontrados durante el testing

> **Nota:** Los bugs reportados para HumiCloud fueron encontrados durante el testing en mayo de 2026, antes del cierre de la tienda. Se mantienen como evidencia de habilidades de detección y reporte de bugs.

1. **Título "HumiCloud" oculto por `display: none`** - El `<h1>` de la tienda tiene un contenedor con clase `d-none` que lo oculta. Se reportó como `BUG-HUMI-001`.
2. **Banner de oferta 3x2 oculto en escritorio** - El contenedor promocional tiene `display: none` por la clase `d-none` de Bootstrap. Se reportó como `BUG-HUMI-003`.
3. **Modal sin `role="dialog"` ni botón de cierre** - El modal de "Abrir Modal Simple" del playground no tiene atributos de accesibilidad ni botón de cierre visible. Solución: clic forzado (`{ force: true }`).
4. **Elementos superpuestos** - Varios elementos del playground (logo de XAcademy, contenedores invisibles) bloquean la interacción con botones y modales. Se aplicó `force: true` como workaround.

## 🚀 Cómo ejecutar los tests

1. **Cloná el repositorio:**
   ```bash
   git clone https://github.com/loboale/qa-automation-team-arag-n.git 
   
2. Instalá las dependencias:
    cd qa-automation-team-arag-n
    npm install

   Este paso descarga todas las herramientas necesarias (Cypress, plugins, etc.) que están listadas en package.json. Es como si estuvieras instalando los "motores" para que los tests funcionen.

3. Abrí Cypress:
   npx cypress open
   Esto ejecuta Cypress sin necesidad de instalarlo globalmente. Usa la versión exacta que descargaste en el paso 2. Se abrirá una ventana donde podés elegir qué test ejecutar.
   
4. Ejecutá los tests desde la interfaz gráfica de Cypress. ¡Y a ver esos checks verdes! ✅

🎓 Lo que aprendí en este proyecto
Instalación y configuración de Cypress desde cero.

Comandos esenciales: cy.visit(), cy.get(), cy.contains(), .type(), .click(), .select(), .check(), .should().

Selectores robustos: data-testid, placeholder, type, name, aria-label, y cómo usarlos cuando no hay data-testid.

Técnicas avanzadas: within() para aislar contenedores, force: true para elementos ocultos o superpuestos, cy.viewport() para testear responsive.

Documentación profesional: Uso de Trello para gestión de tickets y Excel para casos de prueba.

Git y GitHub: Control de versiones, commits, push y creación de repositorios públicos.

👤 Autor
Alexis Aragón Rodriguez - QA Engineer en formación

GitHub: loboale

Email: alexisaragon79@gmail.com

🙏 Agradecimientos
Al Team Aragón y a mi DT Aragón, por las guardias nocturnas, la paciencia infinita y por enseñarme que un QA no solo encuentra bugs: los doma.
