@epic=main-feature
Feature: Add products to the list
  As a guy
  I want add something to my product list
  So product list will contain all my needs

  @issue=JIRA-123
  Scenario: 01 - Individual payee is created in Hyperwallet
    Given Daniel has an empty product list
    When he adds a Laptop to the list
    Then the product list should contain 1 product
