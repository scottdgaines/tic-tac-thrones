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

//Event Listeners
tiles.forEach(function (i) {
  i.addEventListener('click', selectTile)
});

//Event Handlers
function selectTile(event) {
  var selection = event.target.getAttribute('id');
  console.log(selection);
  logSelectedTile(selection), //player);
  // togglePlayer();
  return selection;
}

function logSelectedTile(selection //player) {
  //inter.player
  player.tiles.push(selection)
  console.log(player1)
}

// function togglePlayer() {
//   currentGame.currentTurn.toggle
// }
