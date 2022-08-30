Feature: Logout
  Scenario: Logout Sucessfully
    Given I am currently logged in
    When I activate Logout
    Then I am loggedout