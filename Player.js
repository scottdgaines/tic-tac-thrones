class Player {
  constructor(player) {
    this.name = player.name,
    this.id = player.id,
    this.wins = 0,
    this.tiles = []
  }

  makeSelection(tile) {
    this.tiles.push(tile);
  }

  increaseWins(){

  }
}
