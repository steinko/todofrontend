Feature: List Todos
  Test of the sceanarios that manage the Todo
  Scenario Outline: Get Todos
    Given user "Stein"
    When I activate the get todos command
    Then I get todo details  id: <id> 
    And description <description> 
    And target date <date>
    And if the task is done <isComplted>
Examples: 
  |id |Description | Target Date  |isCompleted |
  |1  |Fix mutter  |2020-01-01    |false  |
  |2  | Fix kjakk  |2020-01-01    |false  |

  Scenario Outline: Add a todo
     Given  todos exist in the system
     And I am logged in as user "Stein"
     And I enter Description "Learn React"
     When I activate "Add"
 Examples: 
  |id |username |description |date       |isDone |
  |1  |Stein    |Fix mutter  |2020-01-01 |false  |
  |2  |Oddmund  |Fix kjak    |2020-01-01 |false  |
  |3  |Oddmund  |Learn React |2020-01-01 |false  |
