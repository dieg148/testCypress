import { Given, Then , When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8000'
Given('the main page is opened', () => {
  cy.visit(url)
})

When(`the user clicks on the {string} link`, (option) => {
  cy.get("header[data-testid='sidebar'] nav a")
    .contains(option)
    .click();
})

When(`the user clicks on the {string} collage`, (option) => {
  cy.get(".css-gvmor2-Layout .item-list-wrapper div [class*='GridItem']")
    .contains(option)
    .click();
})


Then(`the logo is present in the main page`, () => {
  cy.get("header[data-testid='sidebar'] a svg").should("be.visible");
  cy.get("header[data-testid='sidebar'] a svg title").contains("LekoArts");
    
})

Then(`the following menu is present: {string}`, (menu) => {
  let options = menu.split(", ");
  options.forEach(element => {
    cy.get("header[data-testid='sidebar'] nav a")
      .contains(element)
      .should("be.visible");
  });
})

Then(`the collage is present`, () => {
  // Validate the collage section where there are 5 sections 
  // (About, Instagram, Color, Extreme Neon and Breakfast)
  cy.get(".css-gvmor2-Layout .item-list-wrapper div").should("be.visible").within(() => {
    cy.get("[class*='GridItem']")
      .its('length')
      .should('be.eq', 5);
    cy.get("[class*='GridItem']").contains("About");
    cy.get("[class*='GridItem']").contains("Instagram");
    cy.get("[class*='GridItem']").contains("Color");
    cy.get("[class*='GridItem']").contains("Extreme Neon");
    cy.get("[class*='GridItem']").contains("Breakfast");

  })
})
