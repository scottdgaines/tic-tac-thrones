class Player {
  constructor(player) {
    this.name = player.name,
    this.id = player.id,
    this.wins = player.wins,
    this.logo = player.logo,
    this.tiles = []
  }
//Invoked by checkWinConditions() (Via Game Class)
//Increments Win Property by 1
  increaseWins(){
    this.wins++;
  }
}
