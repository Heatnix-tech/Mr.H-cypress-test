/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Function click  ", () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })

    it("Click single ", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.get("#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title").should("be.visible").click()
        cy.get("#menu_admin_Job > .collapsible-header > .left-menu-title").should("be.visible").click()
    })

    it("Click Force true ", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.get("#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title").should("be.visible").click()
        cy.get("#menu_admin_Job > .collapsible-header > .left-menu-title").should("be.visible").click({force: true})
    })


    it.only("Click by coord (x,y) ", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1500)
        cy.get(".page-title").should("be.visible").click(50,5)
        cy.get(".page-title").should("be.visible").click(90,5)
        
    })


})//Describe close