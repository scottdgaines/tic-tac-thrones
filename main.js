//HTML querySelectors
var tiles = document.querySelectorAll('.tile')

//Global Variables
var player1 = new Player({
  name: 'House Stark',
  id: 'one',
  wins: 0
})
var player2 = new Player({
  name: 'House Lannister',
  id: 'two',
  wins: 0
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
  logSelectedTile(selection);
  return selection;
}

function logSelectedTile(selection) {
  player1.tiles.push(selection)
  console.log(player1)
}
