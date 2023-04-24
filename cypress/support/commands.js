const context = Cypress.env('TEST_CONTEXT')

Cypress.Commands.add('contextValidator', options => {
  const { visual } = options

  context
    ? cy.log(`functional and ${context} testing`)
    : cy.log('functional testing')

  switch(context) {
    case 'visual':
      visualValidation(visual)
      break
    default:
      break
  }
})

function visualValidation({ description = '' } = {}) {
  if (description) {
    cy.percySnapshot(description)
  }
}
