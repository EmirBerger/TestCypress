Cypress.on("uncaught:exception", (err, runnable) => {
  // ignora el error ci360 de la página que aparece al acceder a cualquier producto.
  if (err.message.includes('ci360')) {
    return false
  }
});

Cypress.Commands.add('selectProduct', (selectorProduct) =>{
  cy.get(selectorProduct).click()
})

Cypress.Commands.add('applyFilter', (selectorFilter) =>{
  cy.get(selectorFilter).click()
})

Cypress.Commands.add('applyFilterSmallResolution', (selectorFilter) =>{
  cy.get('.block-subtitle').click()
  cy.get(selectorFilter).click()
})

Cypress.Commands.add('selectProductIndex', (index) =>{
  cy.get('.products > ol > li').eq(index).click()
})