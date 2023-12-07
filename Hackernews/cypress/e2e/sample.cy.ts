/// <reference types="cypress" />

describe('sample spec', () => {
  beforeEach(()=>{
    cy.visit("http://127.0.0.1:5500/");
  })
  
  it('has a title', () => {
    cy.contains("Welcome to Homepage");
  })
})