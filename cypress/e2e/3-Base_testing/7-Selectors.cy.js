/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Selector Type  ", () =>{

    it.only("By id ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").should("be.visible", {timeout:5000}).type("Carlos")
        cy.get("#userEmail").should("be.visible").type("demo@gmail.com")
    })


    it("By atribute", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

       cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Perez Chavez")
    })


    it("By Xpath ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")
        cy.wait(1000)
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("demoarvb@gmail.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Demo de la dirección")
    })


    it("By class and contains ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

       cy.get(".custom-control-label").contains("Female").click()
       cy.wait(1000)
       cy.get(".custom-control-label").contains("Other").click()
    })


    it("By copy_selector ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("465654654")

      
    })


    it("By within ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        //cy.get("[type='text']").should("have.attr", "placeholder", "First Name")

        cy.get("#userForm").within(()=>{
            cy.get("[type='text']").should("have.attr", "placeholder", "First Name")
        }).then(
            cy.get("[type='text']").should("have.attr", "placeholder", "First Name").type("Juan")
        )
      
    })


})//Describe close