/// <reference types="cypress" />

describe('GIF List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Verify that the Title in the Navbar is working', () => {
    cy.get('[data-cy="navbar-title"]').should('contain', 'Giphy Gallery')
  })

  it('Verify that we are in Home component and the link should redirect to favorites page', () => {
    cy.get('[data-cy="toggle-link"]').should('contain.text', 'Go to Favorites')
  })

  it('Verify that after clicking the link of Go To Favorites will redirect to the other layout', () => {
    cy.get('[data-cy="toggle-link"]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('[data-cy="toggle-link"]').should('contain.text', 'Go back')
  })

  it('Verify the app is fetching trending GIF in the first load', () => {
    cy.intercept('GET', 'https://api.giphy.com/v1/gifs/trending?&limit=20&offset=0&page=1&api_key=hhdIY2Yrm8WeRsP0RC1kJ6kvSoP6t8Fp')
      .as('getTrendingGifs')
    cy.wait(['@getTrendingGifs'])
    cy.get('span').contains('Title: Despicable Me Minions GIF')
  })
});
