//HTML querySelectors: Arranged Alphabetically According to Name
var button = document.querySelector('.reset-button');
var drawBanner = document.querySelector('.draw-banner');
var grid = document.querySelector('.grid')
var p1Title = document.querySelector('.player1-title');
var p2Title = document.querySelector('.player2-title');
var p1Wins = document.querySelector('.p1-wins');
var p2Wins = document.querySelector('.p2-wins');
var tiles = document.querySelectorAll('.tile');
var titleBanner = document.querySelector('.title-banner');
var turnBanner = document.querySelector('.turn-banner');
var turnName = document.querySelector('.turn-name');
var winnerBanner = document.querySelector('.winner-banner');

//Global Variables: Arranged Alphabetically According to Name
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

//Event Listeners: Arranged Alphabetically According to Variable Name
button.addEventListener('click', newGame);
grid.addEventListener('click', verifyTile);
window.addEventListener('load', newGame);

//Event Handlers: Arranged Alphabetically According to Function Name

//Invoked by currentGame.checkWinConditions()
//Manipulates Styling to Show Banners According to Winner, and Sets roundReset Timer
function declareDraw() {
  button.classList.add('hide');
  grid.classList.add('hide');
  titleBanner.classList.add('hide');
  turnBanner.classList.add('hide');
  drawBanner.classList.remove('hide');
  setTimeout(roundReset, 4000);
}

//Invoked by currentGame.checkWinConditions
//Displays Proper Banners to Announce the Winner, Invokes Timer to Reset Round
function declareWinner() {
  button.classList.add('hide');
  grid.classList.add('hide');
  titleBanner.classList.add('hide')
  turnBanner.classList.add('hide');
  winnerBanner.innerText = `${currentGame.currentTurn.name} sits upon the Iron Throne!`
  winnerBanner.classList.remove('hide');
  setTimeout(roundReset, 3000);
}

//Invoked on Window Load and/or Button Click
//Resets Game to Original / Neuatral Setting
function newGame() {
  p1Title.innerText = player1.name;
  p2Title.innerText = player2.name;
  currentGame.currentTurn = player1;
  turnName.innerText = ` ${currentGame.currentTurn.name}`;
  currentGame.resetWinCount();
  roundReset();
}

//Invoked by verifyTile()
//Displays Logo of Current Player on Tile Once Selected
function placeLogo(selectedElement) {
 selectedElement.classList.add("disable")
 selectedElement.innerHTML = `<img class="tile-icon" src="${currentGame.currentTurn.logo}"
alt="${currentGame.currentTurn.name}\'s logo" />`
};

//Invoked by roundReset
//Resets From Win or Draw Banners to Banner Displaying Current Turn
function resetBanner() {
  drawBanner.classList.add('hide')
  winnerBanner.classList.add('hide');
  titleBanner.classList.remove('hide');
  turnBanner.classList.remove('hide');
}

//Invoked by roundReset()
//Removes All Logos From Grid, and Resets Player Selected Tile Arrays
function resetGrid() {
  currentGame.occupiedTiles = [null];
  player1.tiles = [];
  player2.tiles = [];
  grid.classList.remove('hide')
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

//Invoked by newGame() and setTimeout in declareDraw()
//Resets Game Board Without Resetting Win Counts
function roundReset() {
  button.classList.remove('hide')
  togglePlayer();
  resetBanner();
  resetGrid();
}

//Invoked by verifyTile() and  roundReset()
//Updates Current Turn in Game Class, and Displays Current Turn Banner Accordingly
function togglePlayer(player1, player2) {
  if (currentGame.currentTurn === player1) {
  currentGame.currentTurn = player2;
  turnName.innerText = ` ${currentGame.currentTurn.name}`
} else if (currentGame.currentTurn === player2) {
  currentGame.currentTurn = player1;
  turnName.innerText = ` ${currentGame.currentTurn.name}`
  }
}

//Invoked by currentgame.checkWinConditions() + resetWinCount()
//Displays Updated Win Count
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

//Invoked by Clicking a Tile
//Ensures an Occupied Tile Can't Be Reassigned
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
