
/// <reference types="cypress" />

describe('GIF List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
  })

  it('Verify that the Title in the Navbar is working', () => {
    cy.get('[data-cy="navbar-title"]').should('contain', 'Giphy Gallery')
  })

  it('Verify that we are in Home component and the link should redirect to favorites page', () => {
    cy.get('[data-cy="toggle-link"]').should('contain.text', 'Go back')
  })

  it('Verify that after clicking the link of Go To Favorites will redirect to the other layout', () => {
    cy.get('[data-cy="toggle-link"]').click()
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="toggle-link"]').should('contain.text', 'Go to Favorites')
  })
});
