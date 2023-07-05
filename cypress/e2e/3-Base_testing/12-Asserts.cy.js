/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions#Chai

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Checkboxes  ", () =>{

    it("Assert contains", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        cy.wait(1000)

        cy.get("#block_top_menu").contains("Women").click()

    })

    //Works well when have so much clases shared and want to select 1 from all of them
    //.find() - find an element then ise .eq() to select which one by position and starts with 0
    it("Assert find, eq", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        cy.wait(1500)

        cy.get(".product-container").find(".product-image-container").eq(2).click()

    })

    it("Assert find, eq, validando que el vestido es nuevo y el precio", () =>{
        cy.visit("http://automationpractice.pl/index.php") 
        cy.title().should('eq','My Shop')
        cy.wait(1500)

        cy.get(".product-container").find(".product-image-container").eq(3).click()

        cy.get("#product_condition .editable").then((e)=>{
            // cy.log(e.text())
            let estado=e.text()
            // cy.log(estado)
            if(estado=="New"){
                cy.log("El vestido es Nuevo")
            }
        })

        //then is a function that allows you new fuction sequence inside this action

        cy.get("#our_price_display").then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(1,3) //Starts and ends words to be sliced
            cy.log(precio)

            if(precio > 30){
                cy.log("El vestido sale de nuestro presupuesto, no lo podemos comprar")
                cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
                cy.wait(3000)
            }else{
                cy.log("El vestido esta en nuestro presupuesto, continua con la compra")
                cy.get("#add_to_cart").click()
                cy.wait(5000)
            }
        })

    })


    it.only("Assert contain.text y have.text", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")
        cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
        cy.get("#submit").should("be.visible").click()

        //containt is a function to enable to find an element that containt a text
        //have is a function to enable find an element by exaclty text typed
        cy.get("#name").should("have.text","Name:rodrigo")
        cy.get("#name").should("contain.text","rodrigo")

    })


    it("Assert have.text más then", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")

        cy.get("#userName").should("have.value", "rodrigo").then(()=>{
            cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
            cy.get("#submit").should("be.visible").click()
        })

    })


    it("Assert have.class", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })

    })


    it("Assert have.class y la función and", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })

    })


    it("Assert have.class y la función and", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(()=>{
            cy.get("#userName").type("rodrigo")
        })

    })


    it("Assert length y el css", () =>{
        cy.visit("https://www.seleniumeasy.com/test/table-pagination-demo.html") 
        cy.title().should('eq','Selenium Easy - Table with Pagination Demo')
        cy.wait(1000)
        // have.leght is to count total cells, have.css then propertie and value.
        cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "padding", "8px")

    })


    it("Contains", () =>{
        let tiempo=1000

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        //delete pop up windo
        //{force:true} make an action forced
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        cy.get(".form-group > #user-message").should("be.visible").type("Demo del contenido")

        cy.wait(tiempo)
        //another assert type by contain
        cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

    })


    it("Reto Asserts", () =>{
        let tiempo=1600

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        //Eliminando ventana
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})

        let a=40
        let b=35

        cy.get("#sum1").should("be.visible").and("have.class","form-control").type(a)
        cy.wait(tiempo)
        cy.get("#sum2").should("be.visible").and("have.class","form-control").type(b)
        cy.wait(tiempo)

        cy.contains("[type='button']","Get Total").click()

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("el valor de r: "+ r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("el resultado es incorrecto")
            }

            if(res > 50)
            {
                a=a-10   
                b=b-10
                cy.get("#sum1").invoke("attr", "placeholder").should("contain","Enter value").then(()=>{
                    cy.get("#sum1").clear().type(a)
                    cy.wait(tiempo)
                    //invoke is used to add or edit a property on html
                    cy.get("#sum1").invoke("attr", "style","color:blue")
                })
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)  
                cy.wait(tiempo) 
                cy.get("#sum2").invoke("attr", "style","color:blue")  
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()

                cy.get("#displayvalue").should("be.visible").then((e)=>{
                    cy.get("#displayvalue").invoke("attr","style","color:red")
                })



            }else{
                a=a+5 
                b=b+5
                cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)       
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()
            }

        })

    
    }) 



})//Describe close