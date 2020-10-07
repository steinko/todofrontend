Feature: Create a todo
Scenario Outline: Sucessfull Create a todo
   Given I am logedin as user "Stein
   When create todo is activated
   And Description "Learn React"
   And Target Date 23-07-2020
   Then a todo with <Description> is displayed
   And a <Target Date>
   And <isDone>
Examples: 
   |Description |Target Date |isDone |
   |Learn React |2020-07-23 |false  |


Scenario Outline: Add a todo
     Given  todos exist in the system
     And I am logged in as user "Stein"
     And I enter Description "Learn React"
     When I activate "Add"
 Examples: 
  |id |username |description |date       |isDone |
  |1  |Stein    |Fix mutter  |2020-01-01 |false  |
  |2  |Oddmund  |Fix kjakk    |2020-01-01 |false  |
  |3  |Oddmund  |Learn React |2020-01-01 |false  |
 
