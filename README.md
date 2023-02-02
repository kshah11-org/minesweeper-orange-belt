# template node js

# Domain

A board with squares is given

Some squares have mines
Some squares have numbers

Each square has neighbors
Any square directly - above - below - left - right - on the 4 diagonal
of a square is its neighbor

The number on the square will be the number of neighbors the square has that are mines

If the number is 0 all all its neighbors will automatically open, recursively

If you hit a square with a mine, you lose
If you clear the board without hitting a mine, you win
