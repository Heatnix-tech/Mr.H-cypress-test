/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Checkboxes  ", () =>{

    it.only("Task Select", () =>{
        cy.visit("https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html") 
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000)

        cy.get(".pickData").select(["Maria Eduarda","Giovanna","Manuela"]).then(()=>{
            cy.get(".pAdd").should("be.visible").click().then(()=>{
                cy.wait(2000)
                cy.get(".pAddAll").click().then(()=>{
                    cy.wait(2000)
                    cy.get(".pRemoveAll").click().then(()=>{
                        cy.wait(2000)
                        cy.log("Se movieron todos los elementos")
                    })
                })
            })
            
        })

    })

})//Describe close