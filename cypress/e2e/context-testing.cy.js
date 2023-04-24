const options = {
  visual: {
    description: 'Success message visible'
  }
}

describe('Contextual Testing', () => {
  it('successfully submits the form', () => {
    // Arrange
    cy.visit('/index.html')
    cy.clock()

    // Act
    cy.get('#firstName').type('Walmyr')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('walmyr@example.com')
    cy.get('#open-text-area').type('Test')
    cy.contains('button', 'Enviar').click()

    // Assert
    cy.get('.success').should('be.visible')

    // Context validation
    cy.contextValidator(options)

    // "Act"
    const THREE_SECONDS_IN_MS = 3000
    cy.tick(THREE_SECONDS_IN_MS)

    // Assert
    cy.get('.success').should('not.be.visible')
  })
})
