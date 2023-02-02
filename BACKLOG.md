# User Story 1

As a User
I want to hit a mine in the fist turn
So that I lose the game

# UAT 1.1

Given an empty 3x3 board
When the user hits the center square which is a mine
Then the user loses the game

# User Story 2

As a User
I want to hit a number in the fist turn
So that I continue playing game

# UAT 2.1

Given an empty 3x3 board
When the user hits the center square which is a non 0 number
Then an updated board with the number is returned

# UAT 2.2

Given an empty 3x3 board
When the user hits the top left square which is number 0
Then an updated board with the number is returned

# User Story 3

As a User
I want to hit a number in the fist turn and then mark the mines around
So that I continue playing game

# UAT 3.1

Given an empty 3x3 board
When the user hits the top left square which is number 3
Then the user can mark the squares around it with as mines
