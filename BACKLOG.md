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

Given a 3x3 board with the top left square as 3
When the user marks the squares around it
Then an updated board with the number is returned

# User Story 4

As a User
I want to clear the board without hitting a mine
So that I can win the game

# UAT 4.1

Given a 3x3 board
When the board is cleared without a mine being hit
Then the user wins

# User Story 5

As a User
I want to play a game of multiple turns till i hit a mine
So that I lose the game

# UAT 5.1

Given an empty 3x3 board
When the user hits a number followed by a mine
Then the user loses the game

# UAT 5.1

Given an empty 3x3 board
When the user hits a number followed by a mine
Then the user loses the game

# UAT 5.2

Given an empty 3x3 board
When the user hits 2 number followed by a mine
Then the user loses the game
