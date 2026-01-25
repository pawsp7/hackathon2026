export class GameInstance {
  constructor() {
    this.playerName = '';
    this.day = 1;
    this.happiness = 100;
    this.stress = 0;
    this.money = 1000;
    this.monthly_salary = 2400;
    this.rent = 1000;
    this.bills = 150;

    // HTML Elements
    this.playerNameTitle = document.getElementById('player-name-title');
    this.moneyDisplay = document.getElementById('money-display');
    this.dayDisplay = document.getElementById('day-display');

    this.initializeUI();
  }

  getPlayerName() {
    return this.playerName;
  }

  getDay() {
    return this.day;
  }

  getHappiness() {
    return this.happiness;
  }

  getStress() {
    return this.stress;
  }

  getMoney() {
    return this.money
  }

  setPlayerName(playerName) {
    this.playerName = playerName;
    this.playerNameTitle.textContent = `${this.playerName}`;
    console.log("Player name set");
  }

  setDay(day) {
    this.day = day;
    this.dayDisplay.textContent = `${this.day}`;
  }

  setHappiness(happiness) {
    this.happiness = happiness;
  }

  setStress(stress) {
    this.stress = stress;
  }

  setMoney(money) {
    this.money = money;
    this.moneyDisplay.textContent = `${this.money}`;
  }

  addMoney(amount) {
    this.money += amount;
    this.setMoney(this.money);
  }

  nextDay() {
    this.day += 1;
    this.setDay(this.day);

    if(this.day%14 == 0){
        this.addMoney(this.monthly_salary/2);
    }

    if(this.day%28 == 0){
        this.addMoney(-(this.rent + this.bills));
    }

  }

  initializeUI(){
    this.setPlayerName(this.playerName);
    this.setMoney(this.money);
    this.setDay(this.day);
    console.log("Game Instance created");
  }
}