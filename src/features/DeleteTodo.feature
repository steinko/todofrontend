Feature: Delete Todo
Should delete a todo for a spesific user
   Scenario Outline: Successful deleting a todo
   Give I am logen in as user "Stein
   And A todo with description "Learn React"
   When the todo is selected
   And Delete Tod is actiavted
   Then description <Description> 
Examples: 
   |Description |
   |Fix mutter  |
   |Fix kjak    |
   