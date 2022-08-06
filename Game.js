class Game {
  constructor(p1, p2, banner) {
    this.p1wins = p1.wins,
    this.p1Tiles = p1.tiles,
    this.p2wins = p2.wins,
    this.p2Tiles = p2.tiles,
    this.draws = 0,
    this.currentTurn = p1;
  }
}
