/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Checkboxes  ", () =>{


    it("Select one option from drop down list ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html") 
        cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get("#select-demo").should("be.visible").select("Friday").should("have.value","Friday")
        cy.wait(4000)
        cy.get("#select-demo").should("be.visible").select("Saturday").should("have.value","Saturday")
 
    })


    it("Select 2 ", () =>{
        cy.visit("https://www.google.com/") 
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get(".MUFPAc > :nth-child(2) > .hide-focus-ring").click()
 
    })

    it("Multi-select ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get("#printMe").should("be.visible").click()
        })

    })

})//Describe close