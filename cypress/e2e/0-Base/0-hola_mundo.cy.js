/// <reference types="cypress" />

describe('First test with cypress', () =>{
    it('This is a hello world', () =>{
        cy.log('Welcome to cypress')
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type('Heiner')
        cy.wait(1000)
        cy.get('#wsf-1-field-22').type('Casta')
        cy.wait(1000)
        cy.get('#wsf-1-field-23').type('correo@gmail.com')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type('54322345')
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Address Demo')
        cy.get('#wsf-1-field-27').click()
        cy.wait(4000)

    })
})