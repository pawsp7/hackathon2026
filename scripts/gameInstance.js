import * as EventGenerator from './eventGenerator.js'

export class GameInstance {
  constructor() {
    this.playerName = '';
    this.day = 0;
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
    this.happyValue = document.getElementById('happy-value');
    this.stressValue = document.getElementById('stress-value');

    this.eventGenerator;

    this.initializeEventGenerator();
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
    this.happyValue.textContent = `${this.happiness}`;
  }
  
  addHappiness(amount) {
    this.setHappiness(Math.min(100, this.happiness + amount))
  }

  setStress(stress) {
    this.stress = stress;
    this.stressValue.textContent = `${this.stress}`;
  }
  
  addStress(amount) {
    this.setStress(Math.max(0, this.stress + amount));
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

    var change = 0

    // Receive monthly salary
    if(this.day%14 == 0){
        change += this.monthly_salary/2;
    }

    // Deduct rent and bills
    if(this.day%28 == 0){
        change -= this.rent + this.bills;
    }







    //lose conditions
    if(this.stress >= 100)
    {
      confirm("YOU COULDN'T TAKE THE STRESS ANYMORE. YOU KILLED YOURSELF.");
    }
    if(this.happiness <= 0)
    {
      confirm("You couldn't find a reason to keep going.\n                        ~~~\n             You killed yourself.");
    }
    if(this.money <= 0)
    {
      confirm("YOU COULDNT AFFORD TO LIVE ANYMORE. YOU KILLED YOURSELF.");
    }





    // Deduct food daily
   // change -= 25;
   // add condition when grocery shopping is implemented

    // Apply money change
    this.addMoney(change);

    // Generate random event
    document.getElementById('answer-message-div').style.visibility = 'hidden';

    // 75% chance to be true
    if (Math.random() < 0.75) {
        console.log("generating event");
        this.eventGenerator.generateEvent();
        document.getElementById("question").style.visibility = 'visible';
        document.getElementById("no-event").style.visibility = 'hidden';
        document.getElementById("next").style.visibility = 'hidden';
    } else {
        console.log("no event");
        document.getElementById("question").style.visibility = 'hidden';
        document.getElementById("no-event").style.visibility = 'visible';
        document.getElementById("next").style.visibility = 'visible';
    }

    // set next payday
    document.getElementById("next-payday").innerHTML = 14 * Math.ceil((this.day + 1) / 14);
    
    // set next rent day
    document.getElementById("next-rent-day").innerHTML = 28 * Math.ceil((this.day + 1) / 28);


  }

  initializeUI(){
    this.setPlayerName(this.playerName);
    this.setMoney(this.money);
    this.setDay(this.day);
    console.log("Game Instance created");
  }

  initializeEventGenerator() {
    this.eventGenerator = new EventGenerator.EventGenerator(this);
  }
}