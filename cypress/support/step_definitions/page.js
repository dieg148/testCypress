import { Given, Then , When } from "cypress-cucumber-preprocessor/steps";

Then(`the Projects page is displayed`, () => {
  cy.get("main div[class*='Project']").should("be.visible").within(() => {
    cy.get("[class*='GridItem']")
      .its('length')
      .should('be.eq', 4);
      cy.get("[class*='GridItem']").contains("Color");
      cy.get("[class*='GridItem']").contains("Extreme Neon");
      cy.get("[class*='GridItem']").contains("Breakfast");
      cy.get("[class*='GridItem']").contains("Black & White");
  });
  cy.url().should('include', '/projects')
})

Then(`the Instagram page is displayed`, () => {
  cy.get("[class*='Layout'] .instagram-grid").should("be.visible");
  cy.url().should('include', '/instagram')
})

Then(`the About page is displayed`, () => {
  cy.get("[class*='Layout'] [class*='Page']").should("be.visible").within(() => {
    cy.get("h1").contains("About");
  });
  cy.url().should('include', '/about')
})

Then(`the Color page is displayed`, () => {
  cy.get("[class*='Layout']").should("be.visible").within(() => {
    cy.get("h1").contains("Color - In all its glory");
  });
  cy.url().should('include', '/color-in-all-its-glory')
})

Then(`the Extreme Neon page is displayed`, () => {
  cy.get("[class*='Layout']").should("be.visible").within(() => {
    cy.get("h1").contains("Extreme Neon - What is this trend about?");
  });
  cy.url().should('include', 'extreme-neon-what-is-this-trend-about')
})
  

Then(`the Breakfast page is displayed`, () => {
  cy.get("[class*='Layout']").should("be.visible").within(() => {
    cy.get("h1").contains("Breakfast - The most important time of the day");
  });
  cy.url().should('include', '/breakfast')
  
})


