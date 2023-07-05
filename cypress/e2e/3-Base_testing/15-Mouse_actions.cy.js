/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/
//https://docs.cypress.io/guides/references/assertions#Chai

import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("mouse actions  ", () =>{

    it("Drag and Drop", () =>{
        let tiempo=1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("'eq","The Internet")

        cy.wait(1500)

        cy.get("#column-a").drag("#column-b",{force:true})

    })

    it("Drag and Drop 2", () =>{
        let tiempo=1000
        cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html")
        cy.title("'eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1500)

        cy.get("#todrag > :nth-child(2)").drag("#mydropzone", {force:true})
        cy.wait(1500)
        cy.get("#todrag > :nth-child(3)").drag("#mydropzone", {force:true})
        cy.wait(1500)
        cy.get("#todrag > :nth-child(4)").drag("#mydropzone", {force:true})
        cy.wait(1500)
        cy.get("#todrag > :nth-child(5)").drag("#mydropzone", {force:true})
    })


    
    it("Mouse Over", () =>{
        let tiempo=1000
        cy.visit("http://way2automation.com/")
        cy.title("'eq","Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial")
        cy.wait(tiempo)

        cy.contains("Selenium").trigger('mouseover')
        cy.wait(tiempo)
        //modify an atribute directly from HTML to make easier the process
        cy.contains("Selenium Python Video Tutorials").invoke("removeAttr","target").click()

    })

    it("Slider", () =>{
        let tiempo=1800
        cy.visit("https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html")
        cy.title("'eq","Selenium Easy - Drag and Drop Range Sliders ")
        cy.wait(tiempo)

        cy.get("#slider1 > .range > input").invoke("attr", "value", "90")
        cy.wait(tiempo)

        cy.get("#slider3 > .range > input").invoke("attr", "value", "90")
        cy.wait(tiempo)
        cy.get("#slider5 > .range > input").invoke("attr", "value", "90")

        

    })

})//Describe close