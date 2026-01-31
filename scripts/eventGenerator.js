import * as Game from "./gameInstance.js";

export class EventGenerator {

    constructor(appInstance) {
        this.game = appInstance;
        this.eventsFile;
        this.events;
        this.eachEvents;
        this.eachEventInDifferentArrays;
        this.eventIndex;

        [
            this.eventName , 
            this.eventText , 
            this.OptionXText , 
            this.XfundModification , 
            this.XHappinessModification , 
            this.XStressModification, 
            this.OptionYtext , 
            this.YfundModification , 
            this.YHappinessModification , 
            this.YStressModification 
        ] = "";

        this.yesButton = document.getElementById("yes");
        this.noButton = document.getElementById("no");
        this.questionText = document.getElementById("question-text");
        this.answerText = document.getElementById("answer-stats");
        this.messageDiv = document.getElementById('answer-message-div');
        this.messageText = document.getElementById('answer-message');

        this.initializeEventFile();

        
        this.yesButton.addEventListener("click" , () => {this.submitResponse("yes")});
        this.noButton.addEventListener("click" , () => {this.submitResponse("no")});
    }

    generateEvent() {
        this.eventIndex = Math.ceil(Math.random()*10)
        var differentArrays = this.eachEventInDifferentArrays[this.eventIndex];
        console.log(differentArrays);

        this.answerText.innerHTML = "";

        [
            this.eventName , 
            this.eventText , 
            this.OptionXText , 
            this.XfundModification , 
            this.XHappinessModification , 
            this.XStressModification, 
            this.OptionYtext , 
            this.YfundModification , 
            this.YHappinessModification , 
            this.YStressModification 
        ] = differentArrays;
        
        this.questionText.innerHTML=this.eventText;
       
        this.yesButton.innerHTML=this.OptionXText;
        this.noButton.innerHTML=this.OptionYtext;
    }

    submitResponse(response) {
        console.log("Im in bro")
         if (response == "yes") {
           this.answerText.innerHTML= `${this.XfundModification}CAD , ${this.XHappinessModification} Happiness , ${this.XStressModification} stress level `;
           this.game.addMoney(parseInt(this.XfundModification));
           this.game.addHappiness(parseInt(this.XHappinessModification));
           this.game.addStress(parseInt(this.XStressModification));
           
         }

         else if (response == "no") {
           this.answerText.innerHTML= `${this.YfundModification}CAD , ${this.YHappinessModification} Happiness , ${this.YStressModification} stress level `;
           this.game.addMoney(parseInt(this.YfundModification));
           this.game.addHappiness(parseInt(this.YHappinessModification));
           this.game.addStress(parseInt(this.YStressModification));
         }

         console.log(this.answerText.innerHTML)
        document.getElementById("question").style.visibility = 'hidden';
        document.getElementById('answer-message-div').style.visibility = 'visible';
        document.getElementById("next").style.visibility = 'visible';
        document.getElementById('answer-message').style.visibility = 'visible';

    }
        

    async initializeEventFile() {
        this.eventsFile = await fetch('random.csv');
        this.events = await this.eventsFile.text();
        this.eachEvents= this.events.split(`\n`);
        this.eachEventInDifferentArrays = this.eachEvents.map(eachEvent => eachEvent.split(","));
        console.log(this.eachEventInDifferentArrays);
    }
}