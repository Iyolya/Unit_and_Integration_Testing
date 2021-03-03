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

  it('the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })
 
  it('multiple operations can be chained together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1')
  })

  it('the expected output can be decimal', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 0.5);
  })

  it('the expected output can be positive', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 2);
  })

  it('the expected output can be negative', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', -1);
  })

  it('the expected output can be a large number', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 90000);
  })

})