/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Window reference  ", () =>{

    
    it("Windows property charset", () =>{

        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        //have.property we want to check on html structure design
        cy.document().should("have.property", "charset").and('eq','UTF-8')
      
    });


    it("Windows url", () =>{

        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        //cy.url() we want to check route and properties on this site

        cy.url().should("include","random-number.html")
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
      
    });

})//Describe close