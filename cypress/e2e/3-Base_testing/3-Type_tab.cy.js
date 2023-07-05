/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Ex Function Tab  ", () =>{

    it("Type Tab ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").type("Heiner").tab().
        type("Casta").tab().
        type("mail@mail.com")
    })


})//Describe close