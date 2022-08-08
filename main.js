//HTML querySelectors
var grid = document.querySelector('.grid')
var tiles = document.querySelectorAll('.tile');
var titleBanner = document.querySelector('.title-banner');
var playerName = document.querySelector('.player-name');
var turnBanner = document.querySelector('.turn-banner');
var winnerBanner = document.querySelector('.winner-banner');
var drawBanner = document.querySelector('.draw-banner');
var p1Wins = document.querySelector('.p1-wins');
var p2Wins = document.querySelector('.p2-wins');
var button = document.querySelector('.reset-button')

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
grid.addEventListener('click', verifyTile);
button.addEventListener('click', newGame)

//Event Handlers
//Keeps an occupied tile from being reassigned
function newGame() {
  resetWinCount();
  reset();
}

function resetWinCount() {
  player1.wins = 0;
  player2.wins = 0;
  updateWinCount();
}

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
      currentGame.currentTurn.wins++;
      declareWinner();
      updateWinCount();
    } else if (currentGame.occupiedTiles.length === 10 &&
      !(currentGame.currentTurn.tiles.includes(index1) &&
      currentGame.currentTurn.tiles.includes(index2) &&
      currentGame.currentTurn.tiles.includes(index3))) {
        declareDraw()
    }
  }
}

//Displays proper banners to announce the winner, invokes timer to reset round
function declareWinner() {
  titleBanner.classList.add('hide');
  turnBanner.classList.add('hide');
  winnerBanner.innerText = `${currentGame.currentTurn.name} sits upon the Iron Throne!`
  winnerBanner.classList.remove('hide');
  setTimeout(reset, 3000);
}

//Increment win count for player data model, and updates DOM
function updateWinCount() {
  if (player1.wins === 1) {
    p1Wins.innerText = `${player1.wins} reign`;
  } else if (player1.wins < 1 || player1.wins > 1) {
    p1Wins.innerText = `${player1.wins} reigns`;
  }
  if (player2.wins === 1) {
    p2Wins.innerText = `${player2.wins} reign`;
  } else if (player2.wins < 1 || player2.wins > 1) {
    p2Wins.innerText = `${player2.wins} reigns`;
  }
}

//Resets round without resetting win counts
function reset() {
  togglePlayer();
  resetBanner();
  resetGrid();
}

//resets win or draw banners back to turn banner
function resetBanner() {
  titleBanner.classList.remove('hide');
  turnBanner.classList.remove('hide');
  winnerBanner.classList.add('hide');
  drawBanner.classList.add('hide')
}

//removes all logos, and resets arrays
function resetGrid() {
  currentGame.occupiedTiles = [null];
  player1.tiles = [];
  player2.tiles = [];
  grid.innerHTML =
  `<article class="tile t1" id=1></article>
  <article class="tile t2" id=2></article>
  <article class="tile t3" id=3></article>
  <article class="tile t4" id=4></article>
  <article class="tile t5" id=5></article>
  <article class="tile t6" id=6></article>
  <article class="tile t7" id=7></article>
  <article class="tile t8" id=8></article>
  <article class="tile t9" id=9></article>`
}

//Manipulates styling to show proper banners, toggles player, and sets timer to reset round
function declareDraw() {
  titleBanner.classList.add('hide');
  turnBanner.classList.add('hide');
  drawBanner.classList.remove('hide');
  setTimeout(roundReset, 4000);
  togglePlayer();
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
