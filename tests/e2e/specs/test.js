// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '21')
  })
  
  it('the number buttons update the display of the running total', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '99')
  })
})
