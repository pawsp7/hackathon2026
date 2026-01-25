
        import * as Game from "./gameInstance.js";
        import * as EventGenerator from "./eventGenerator.js";

        // let money = 0;

        // const question = document.getElementById('question');
        // const moneyDisplay = document.getElementById('money-display');
        // const no = document.getElementById('no');
        // const yes = document.getElementById('yes');
        const next = document.getElementById('next');
        // const messageDiv = document.getElementById('answer-message-div');
        // const messageText = document.getElementById('answer-message');
        // const playerNameTitle = document.getElementById('player-name-title');
        const nameInput = document.getElementById('name');
        const submitNameButton = document.getElementById('submit-name');
        const appInstance = new Game.GameInstance();
        const mainDiv = document.getElementById('main-div');
        const initialScreen = document.getElementById('initial-screen');

        // function updateMoneyDisplay() {
        //     moneyDisplay.textContent = `Money: $${money}`;
        // }  
        
        
        // Initial display update
        // updateMoneyDisplay();
/*
        no.addEventListener('click', () => {
            // money += 1; // Add $1
            appInstance.addMoney(1);
            question.style.display = 'none';
            messageDiv.style.display = 'block';
            messageDiv.style.visibility = "visible";
            messageText.innerHTML = " you didn't buy spotify premium ($10/month) </br>";
            // updateMoneyDisplay();

        });

        yes.addEventListener('click', () => {
            // money -= 10; // Remove $10
            appInstance.addMoney(-10);
            question.style.display = 'none';
            messageDiv.style.display = 'block';
            messageText.innerHTML = " you didn't buy spotify premium ($10/month) </br>";
            // updateMoneyDisplay();
        });
*/
     

        submitNameButton.addEventListener('click', () => {
            console.log("Submit name");
            const playerName = nameInput.value.trim();
            if (playerName) {
                // playerNameTitle.textContent = `Player Name: ${playerName}`;
                nameInput.value = '';
                appInstance.setPlayerName(playerName);
                initialScreen.hidden = true;
                mainDiv.hidden = false
                appInstance.nextDay();
            }
        });

        next.addEventListener('click', () => {
            appInstance.nextDay();
        })

        