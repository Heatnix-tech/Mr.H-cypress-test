/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Checkboxes  ", () =>{

    it("Check 1 ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("Check by selection ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        // cy.get("#isAgeSelected").check().should("be.checked")
        // cy.xpath("(//input[contains(@type,'checkbox')])[5]").check()

        cy.get("#isAgeSelected").click()
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").click()

       
    })


    it.only("Radius Button ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html") 
        cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        cy.get(".panel-body > :nth-child(3) > input").click()

       
    })


})//Describe close