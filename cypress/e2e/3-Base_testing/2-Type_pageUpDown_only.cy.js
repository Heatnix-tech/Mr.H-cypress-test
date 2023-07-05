/// <reference types="Cypress" />

describe("Ex Type pageUp, pageDown  ", () =>{

    it.only("Type first ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        cy.wait(2000)
    })


    it("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })

    it("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })

    it("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })

    it("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })

    it("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })

    it.only("Type last ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })



})//Describe close