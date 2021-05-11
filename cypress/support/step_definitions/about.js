import { Given, Then , When } from "cypress-cucumber-preprocessor/steps";



Then(`the Projects page is displayed`, () => {
  cy.get("[class*='Layout']").should("be.visible").within(() => {
    cy.get("h1").contains("About");
    
  });
  cy.url().should('include', '/about')
})


  