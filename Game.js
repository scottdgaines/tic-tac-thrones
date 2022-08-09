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

  //Records selected tile's ID in the selecting-player's array
  logSelectedTile(selection) {
    this.currentTurn.tiles.push(selection);
    this.occupiedTiles.push(selection);
  }
}
//startNewGame()
//reset win counts
