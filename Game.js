class Game {
  constructor(player1, player2) {
    this.player1 = player1.name,
    this.p1Wins = player1.wins,
    this.p1Tiles = player1.tiles
    this.player2 = player2.name,
    this.p2wins = player2.wins
    this.p2Tiles = player2.tiles
  }

  determineWinner(player) {
    var winningConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]

    for (var i = 0; i < winningConditions.length; i++) {
      console.log(winningConditions[i])
      console.log(this.p1Tiles)
      if (this.p1Tiles == winningConditions[i]) {
        console.log(`${player.name} wins!`);
      } else {
        console.log('draw!')
      }
    }
  }
}
//
// board data / selections
// current Turn
// win conditions + draw
// reset

// playGame(player) {
//   var board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
//   ]
//   for (var i = 0; i < board.length; i++) {
//     for (var i = 0; i < board[i].length; i++){
//       board[i][i].push(player)
//     }
//   }
// }
