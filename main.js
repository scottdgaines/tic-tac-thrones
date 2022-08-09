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
var currentGame = new Game({
  name: 'House Stark',
  id: 'one',
  wins: 0,
  logo: 'assets/stark-white.png'},
  {
  name: 'House Lannister',
  id: 'two',
  wins: 0,
  logo: 'assets/lannister-white.png'});
var player1 = currentGame.player1;
var player2 = currentGame.player2;

//Event Listeners
grid.addEventListener('click', verifyTile);
button.addEventListener('click', newGame)

//Event Handlers
//Keeps an occupied tile from being reassigned
function newGame() {
  currentGame.resetWinCount();
  roundReset();
}

function verifyTile() {
  var selection = event.target.getAttribute('id');
  var selectedElement = event.target;
  if (!currentGame.occupiedTiles.includes(selection)) {
    currentGame.logSelectedTile(selection);
    placeLogo(selectedElement);
    currentGame.checkWinConditions();
    togglePlayer(player1, player2);
  }
}

//Displays proper banners to announce the winner, invokes timer to reset round
function declareWinner() {
  turnBanner.classList.add('hide');
  winnerBanner.innerText = `${currentGame.currentTurn.name} sits upon the Iron Throne!`
  winnerBanner.classList.remove('hide');
  setTimeout(reset, 3000);
}

//Increment win count for player data model, and updates DOM
function updateWinDisplay() {
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
function roundReset() {
  button.classList.remove('hide')
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
  grid.classList.remove('hide')
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
  button.classList.add('hide');
  grid.classList.add('hide');
  drawBanner.classList.remove('hide');
  setTimeout(reset, 4000);
}

//Changes whose turn it is, updates banner and grid icon
function togglePlayer(player1, player2) {
  if (currentGame.currentTurn === player1) {
  currentGame.currentTurn = player2;
  playerName.innerText = ` ${player2.name}`
} else if (currentGame.currentTurn === player2) {
  currentGame.currentTurn = player1;
  playerName.innerText = ` ${player1.name}`
  }
}

//Changes selected tile to logo of current player
function placeLogo(selectedElement) {
  selectedElement.classList.add("disable")
  selectedElement.innerHTML = `<img class="tile-icon" src="${currentGame.currentTurn.logo}"
 alt="${currentGame.currentTurn.name}\'s logo" />`
};
