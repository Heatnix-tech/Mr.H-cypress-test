/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/
//https://docs.cypress.io/guides/references/assertions#Chai


require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe("upload function  ", () =>{

    it("upload img", () =>{
        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        //Will take file directly from feature folder
        const ruta='Example_img.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)

       

    })

})//Describe close