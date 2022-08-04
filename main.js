//HTML querySelectors

//Global Variables
var player1 = new Player({name: 'House Stark', id: 'one'});
var player2 = new Player({name: 'House Lannister', id: 'two'});

var newGame = new Game(player1, player2);

console.log(newGame)

player1.makeSelection(1)
console.log(player1)
player1.makeSelection(2)
player1.makeSelection(3)
player1.makeSelection(7)
newGame.determineWinner(player1)
player2.makeSelection(4)
player2.makeSelection(5)
player2.makeSelection(8)
player2.makeSelection(9)
console.log(player1, player2)
//Event Listners
//player will select article

//Event Handlers
// selected article picture changes
//parseInt selected article and use as argument to update Player Class

// function claimSquare(event) {
//  var space = event.target
//  .makeSelection(space)
// }
