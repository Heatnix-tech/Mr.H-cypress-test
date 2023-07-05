/// <reference types="cypress" />


describe('Automation task test suite', () =>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5')
        cy.wait(4000)

    })
    it('Url Navigation', () =>{
        cy.title().should('eq', 'Reschedule')
        cy.wait(2000)
        cy.log('Function Url Validation - PASS')
    })

    it('Type meeting button', () =>{
        cy.get('#schedule-container > div.jsx-1690130522.schedule-dashboard > div.jsx-1690130522.schedule-dashboard__first > div.jsx-2536202604.meeting > ul > li:nth-child(4) > div > button').trigger('click')
        cy.wait(2000)
        cy.log('Function Button - PASS')
    })

    it('Validate meeting options', () =>{
        cy.get('#schedule-container > div.jsx-1690130522.schedule-dashboard > div.jsx-1690130522.schedule-dashboard__first > div.jsx-2536202604.meeting > ul > li:nth-child(4) > div > button').trigger('click')
        cy.wait(2000)
        cy.get(':nth-child(2) > .ZUICardLabel--10h9kgq > .ZUICard__container').should('be.visible')
        cy.get(':nth-child(3) > .ZUICardLabel--10h9kgq > .ZUICard__container').should('be.visible')
        cy.get(':nth-child(1) > .ZUICardLabel--10h9kgq > .ZUICard__container').should('be.visible').click()
        cy.wait(2000)
        cy.get('.styles_modalDashboard__meeting__Nkp_z > .ButtonContainer--1024f4p').should('be.visible').click()
        cy.wait(2000)
        cy.get('#ZUIModal-children-container > div > div > div > div > p.styles_modalDashboard__message__RfTzJ').should('be.visible')    
    })
    

})//Describe close