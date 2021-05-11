Feature: Initial Main Page

  As a user I want to see the main page
  
  Background:
    Given the main page is opened

  
  Scenario: The use can see the main page with the expected information
    Then the logo is present in the main page
    And the following menu is present: "Projects, Instagram, About"
    And the collage is present
  

  Scenario Outline: The links from sidebar menu work as expected
    When the user clicks on the "<option>" link
    Then the following menu is present: "Projects, Instagram, About"
    And the <option> page is displayed

    Examples:
      | option    |
      | Projects  |
      | Instagram |
      | About     |
  

  Scenario Outline: The links from the collage work as expected
    When the user clicks on the "<option>" collage
    Then the following menu is present: "Projects, Instagram, About"
    And the <option> page is displayed

    Examples:
      | option        |
      | About         |
      | Instagram     |
      | Color         |
      | Extreme Neon  |
      | Breakfast     |
