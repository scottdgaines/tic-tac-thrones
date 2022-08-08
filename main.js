//HTML querySelectors
var tiles = document.querySelectorAll('.tile');
var titleBanner = document.querySelector('.title-banner');
var playerName = document.querySelector('.player-name');
var turnBanner = document.querySelector('.turn-banner');
var winnerBanner = document.querySelector('.winner-banner');

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
var conditions = currentGame.winningConditions;

//Event Listeners
tiles.forEach(function (i) {
  i.addEventListener('click', verifyTile)
});

//Event Handlers
//Keeps an occupied tile from being reassigned
function verifyTile() {
  var selection = event.target.getAttribute('id');
  var selectedElement = event.target;
  if (!currentGame.occupiedTiles.includes(selection)) {
    logSelectedTile(selection);
    placeLogo(selectedElement);
    checkConditions();
    togglePlayer(player1, player2);
  }
}

//Records selected tile ID in the selecting-player's array
function logSelectedTile(selection) {
  currentGame.currentTurn.tiles.push(selection);
  currentGame.occupiedTiles.push(selection)
}

//Compares player's seclected tiles against the winning conditions
function checkConditions() {
  for (var i = 0; i < conditions.length; i++) {
    var index1 = conditions[i][0];
    var index2 = conditions[i][1];
    var index3 = conditions[i][2];
    if (currentGame.currentTurn.tiles.includes(index1) &&
    currentGame.currentTurn.tiles.includes(index2) &&
    currentGame.currentTurn.tiles.includes(index3)) {
      console.log('we have a winner')
      declareWinner();
      //update win count
      //round reset
    }
  }
}

function declareWinner() {
  titleBanner.classList.add('hide');
  turnBanner.classList.add('hide');
  winnerBanner.innerText = `${currentGame.currentTurn.name} sits upon the Iron Throne!`
  winnerBanner.classList.remove('hide');
}

//Changes whose turn it is, updates banner and grid icon
function togglePlayer(p1, p2) {
  if (currentGame.currentTurn === p1) {
  currentGame.currentTurn = p2;
  playerName.innerText = ` ${p2.name}`
  } else if (currentGame.currentTurn === p2) {
  currentGame.currentTurn = p1;
  playerName.innerText = ` ${p1.name}`
  }
}

//Changes selected tile to logo of current player
function placeLogo(selectedElement) {
  selectedElement.classList.add("disable")
  selectedElement.innerHTML = `<img class="tile-icon" src="${currentGame.currentTurn.logo}"
 alt="${currentGame.currentTurn.name}\'s logo" />`
};
