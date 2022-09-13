const computer = document.getElementById('computer');
const user = document.getElementById('user');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('input');
let userChoice;
let computerChoice;
let res;

possibleChoices.forEach(element => {
    element.addEventListener('click', (e) => {
        userChoice = e.target.id;
        console.log(userChoice);
        user.innerHTML = userChoice;
        generateComputerChoice();
        getresult();
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computer.innerHTML = computerChoice;
}

function getresult() {
    if (computerChoice === userChoice) {
        res = `Its a draw!`
    }
    if (computerChoice === `rock` && userChoice === `paper`) {
        res = `You win!`
    }
    if (computerChoice === `rock` && userChoice === `scissors`) {
        res = `You lost!`
    }
    if (computerChoice === `paper` && userChoice === `scissors`) {
        res = `You win!`
    }
    if (computerChoice === `paper` && userChoice === `rock`) {
        res = `You lost!`
    }
    if (computerChoice === `scissors` && userChoice === `rock`) {
        res = `You win!`
    }
    if (computerChoice === `scissors` && userChoice === `paper`) {
        res = `You lost!`
    }
    console.log(res);
    result.innerHTML = res;
}