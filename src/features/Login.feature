Feature: Login
  Scenario: Login Sucessfully
    Given I am currently logged out
    And I enter password dummy
    When I activate Login
    Then I am loggedin

  Scenario: Login failure
     Given I am currently logged out
     And I enter user name stein
     And I enter password dummy
     When I activate Login
     Then a message "Invalid login"

 
