class Game {
  constructor(p1, p2) {
    this.draws = 0,
    this.currentTurn = p1,
    this.currentWinner
    this.occupiedTiles = [null]
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
}
//startNewGame()
//instantiate new players
//reset win counts
