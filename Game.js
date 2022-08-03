class Game {
  constructor(player1, player2) {
    this.player1 = player1.name,
    this.p1Wins = player1.wins,
    this.player2 = player2.name,
    this.p2wins = player2.wins
  }
}

module.exports = Game;
