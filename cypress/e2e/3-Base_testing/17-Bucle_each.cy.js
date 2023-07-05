/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/
//https://docs.cypress.io/guides/references/assertions#Chai

import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Bucle For and Each ", () =>{

    it("For 1", () =>{
       
        //Declare variable, then when stop, then increment.
        //index always starts at 0 on programming
        for(let i=1; i<=100; i=i+10){
            cy.log("Numero: " + i)
        }

    })


    it("For 2", () =>{
       
        //Increment here is 1 by 1 (i++)
        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + " X " + i + "=" + t*i)
        }

    })

    

    it("Each 1", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

        //There are 3 var then a promise, $el is used to record all objects text() names with same property
        cy.get(".product-name").each(($el,index,$list)=>{
            

           // cy.log($el.text())
            let vestido=$el.text()
            cy.log(vestido)

        })

    })


    it("Each 2", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        cy.wait(2000)

        cy.get(".product-name").each(($el,index,$list)=>{
            

           // cy.log($el.text())
           // var.includes() is used to check content
           // cy.wrap() is used when each function was used before
           // after use cy.wrap() you can add actions
            let vestido=$el.text()
            if(vestido.includes("Printed Summer Dress")){
                cy.wrap($el).click()
            }

        })

    })



    it.only("Each 3", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        let t=200
        cy.wait(t)

            
        for(let x=0; x<=3; x++){
            //.eq() take an element by position
            cy.get("#center_column .product-name").eq(x).click({force:true})
            cy.wait(t)
            cy.get("#quantity_wanted").should("be.visible").clear().type("4")
            cy.wait(t)
            cy.get("#group_1").select("M").should("have.value","2")
            cy.wait(t)
            cy.get(".exclusive > span").should("be.visible").click({force:true})
            cy.wait(t)
            cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
            cy.wait(t)
            cy.get(".icon-home").should("be.visible").click({force:true})
        }
    })


    it("Each 4", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        let t=200
        cy.wait(t)
        //Array with n number of data, 2 or more
        //const datos=['a','b','c',...];
        const datos=[];

        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            //Record data and return qty elements are there, depends how many elements have the page
            datos[index]=$el.text()
            // show a list 1 by one of the qty elements
            cy.log(datos.length)
        }).then(()=>{
            
            for(let x=0; x<=datos.length; x++){
                //.eq() take an element by position
                cy.get("#center_column .product-name").eq(x).click({force:true})
                cy.wait(t)
                cy.get("#quantity_wanted").should("be.visible").clear().type("4")
                cy.wait(t)
                cy.get("#group_1").select("M").should("have.value","2")
                cy.wait(t)
                cy.get(".exclusive > span").should("be.visible").click({force:true})
                cy.wait(t)
                cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
                cy.wait(t)
                cy.get(".icon-home").should("be.visible").click({force:true})
            }

        })
       

    })

})//Describe close