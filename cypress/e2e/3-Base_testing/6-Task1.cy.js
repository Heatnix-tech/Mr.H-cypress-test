/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Task 1  ", () =>{

    it(" ", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq',"ToolsQA") 
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //add data
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Juan").tab().
        type("Perez").tab().
        type("juan@gmail.com").tab().type("35").tab().type("30000").tab().type("Sistemas")
        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //Edit data
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1000)
        cy.get("#age").should("be.visible").clear().type("50")
        cy.wait(1500)
        cy.get("#salary").should("be.visible").clear().type("50000")
        cy.get("#submit").should("be.visible").click()

        //Delete data
        cy.wait(2000)
        cy.get("#delete-record-2").should("be.visible").click()

    })


})//Describe close