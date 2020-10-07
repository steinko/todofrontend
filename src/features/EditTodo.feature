Feature: Edit a todo
Scenario: Edit Decription
   Given I am logedin as user "Stein
   And a todo with Decription "Learn Cucumber"
   When the todo is selected
   And the Description is chawed to "Learn Java"
   Then a todo with Description "Lerners Javas" is displayed