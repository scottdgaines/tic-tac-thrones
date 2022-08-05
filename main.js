//HTML querySelectors
var tiles = document.querySelectorAll('.tile')

//Global Variables
var player1 = new Player({
  name: 'House Stark',
  id: 'one',
  wins: 0,
  logo: 'assets/stark.png'
})
var player2 = new Player({
  name: 'House Lannister',
  id: 'two',
  wins: 0,
  logo: 'assets/lannister.png'
})
var currentGame = new Game(player1, player2)
console.log(currentGame)

//Event Listeners
tiles.forEach(function (i) {
  i.addEventListener('click', selectTile)
});

//Event Handlers
function selectTile(event) {
  var selection = event.target.getAttribute('id');
  verifyTile(currentGame, selection);
  return selection;
}

function verifyTile(currentGame, selection) {
  if (!currentGame.p1Tiles.includes(selection) &&
    !currentGame.p2Tiles.includes(selection) ) {
    logSelectedTile(selection, currentGame);
    togglePlayer(currentGame, player1, player2);
  }
}

function logSelectedTile(selection, currentGame) {
  console.log(currentGame.currentTurn.name)
  currentGame.currentTurn.tiles.push(selection);
  console.log(currentGame.currentTurn.tiles)
}

function togglePlayer(currentGame, p1, p2) {
  if (currentGame.currentTurn === p1) {
  currentGame.currentTurn = p2
  } else if (currentGame.currentTurn === p2) {
  currentGame.currentTurn = p1
  }
}
