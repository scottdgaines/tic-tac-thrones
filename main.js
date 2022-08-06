//HTML querySelectors
var tiles = document.querySelectorAll('.tile');
var banner = document.querySelector('.player-turn');

//Global Variables
var player1 = new Player({
  name: 'House Stark',
  id: 'one',
  wins: 0,
  logo: 'assets/stark-white.png'
});
var player2 = new Player({
  name: 'House Lannister',
  id: 'two',
  wins: 0,
  logo: 'assets/lannister-white.png'
});
var currentGame = new Game(player1, player2);
console.log(currentGame)

//Event Listeners
tiles.forEach(function (i) {
  i.addEventListener('click', selectTile)
});

//Event Handlers
//pulls ID from selected tile to be used in following fxns
function selectTile(event) {
  var selection = event.target.getAttribute('id');
  var selectedElement = event.target
  verifyTile(currentGame, selection, selectedElement);
  return selection;
}

//Keeps an occupied tile from being reassigned
function verifyTile(currentGame, selection, selectedElement) {
  if (!currentGame.p1Tiles.includes(selection) &&
    !currentGame.p2Tiles.includes(selection) ) {
    logSelectedTile(selection, currentGame);
    placeLogo(currentGame, selectedElement);
    togglePlayer(currentGame, player1, player2, banner);
  }
}
//Records selected tile ID in the selecting-player's array
function logSelectedTile(selection, currentGame) {
  console.log(currentGame.currentTurn.name)
  currentGame.currentTurn.tiles.push(selection);
  console.log(currentGame.currentTurn.tiles)
  console.log(currentGame.currentTurn.logo)
}
//Changes whose turn it is, updates banner and grid icon
function togglePlayer(currentGame, p1, p2, banner) {
  if (currentGame.currentTurn === p1) {
  currentGame.currentTurn = p2;
  banner.innerText = ` ${p2.name}`
  } else if (currentGame.currentTurn === p2) {
  currentGame.currentTurn = p1;
  banner.innerText = ` ${p1.name}`
  }
}
//Changes selected tile to logo of current player
function placeLogo(currentGame, selectedElement) {
  selectedElement.innerHTML = `<img class="tile-icon" src="${currentGame.currentTurn.logo}"
 alt="${currentGame.currentTurn.name}\'s logo" />`
 console.log(selectedElement)
};
