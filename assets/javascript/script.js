const getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        return userInput;
    } else if (userInput === "paper") {
        return userInput;
    } else if (userInput === "scissors") {
        return userInput;
    } else {
        console.log("Error!");
    }
}

const getComputerChoice = function (computerInput) {
    randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else (randomNumber === 2); {
        return "scissors";
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper"){
            return "Computer won";
        } else if (computerChoice === "scissors") {
            return "User won";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "User won";
        } else if (computerChoice === "rock") {
            return "User won";
        }
    } else (userChoice === "scissors"); {
        if (computerChoice === "rock") {
            return "Computer won";
        } else if (computerChoice === "paper") {
            return "User won";
        }
    }
}

function playGame() {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log("Your choice is " + userChoice);
    console.log("Computer's choice is " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();