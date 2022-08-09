class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1),
    this.player2 = new Player (player2),
    this.currentTurn = this.player1,
    this.occupiedTiles = [null],
    this.winningConditions = [
                      ['1', '2', '3'],
                      ['4', '5', '6'],
                      ['7', '8', '9'],
                      ['1', '4', '7'],
                      ['2', '5', '8'],
                      ['3', '6', '9'],
                      ['1', '5', '9'],
                      ['3', '5', '7']
                    ]
  }
  //Invoked by verifyTile()
  //Records Selected Tile's ID in the Selecting-Player's Array
  logSelectedTile(selection) {
    this.currentTurn.tiles.push(selection);
    this.occupiedTiles.push(selection);
  }
  //Invoked by verifyTile()
  //Compares Player's Seclected Tiles Against the Winning Conditions
  checkWinConditions() {
    var conditions = this.winningConditions;
    var currentTiles = this.currentTurn.tiles;

    for (var i = 0; i < conditions.length; i++) {
      var index1 = conditions[i][0];
      var index2 = conditions[i][1];
      var index3 = conditions[i][2];

      if (currentTiles.includes(index1) && currentTiles.includes(index2)
        && currentTiles.includes(index3)) {
        this.currentTurn.increaseWins();
        declareWinner();
        updateWinDisplay();
      } else if (this.occupiedTiles.length === 10 &&
          !(currentTiles.includes(index1) && currentTiles.includes(index2)
          && currentTiles.includes(index3))) {
          declareDraw()
      }
    }
  }
  //Invoked by newGame()
  //Resets Win Properties of Player Instances to 0
  resetWinCount() {
    this.player1.wins = 0;
    this.player2.wins = 0;
    updateWinDisplay();
  }
}
