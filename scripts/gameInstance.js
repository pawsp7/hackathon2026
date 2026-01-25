export class GameInstance {
  constructor(playerName, day) {
    this.playerName = playerName;
    this.day = day;
    console.log("Game Instance created");
  }

  getPlayerName() {
    return this.playerName;
  }

  getDay() {
    return this.day;
  }

  setPlayerName(playerName) {
    this.playerName = playerName;
    console.log("Player name set");
  }

  setDay(day) {
    this.day = day;
  }
}