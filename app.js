// Element definations

let gesture = [];
gesture[0] = `<img src="icons/rock.png" alt="">`;
gesture[1] = `<img src="icons/paper.png" alt="">`;
gesture[2] = `<img src="icons/scissors.svg" alt="">`;

let verdict = document.querySelector('#verdict')
let computerBtn = document.querySelector('#comp_choice')
let ComputerChoice = document.querySelector('#comp_choice').innerHTML
let newGameBtn = document.querySelector('#newGame')

let compWins = document.querySelector('#c_heading span')
let playerWins = document.querySelector('#p_heading span')

let k = 0;

// Operation Functions
function getRandomInt(min, max) {
    return (Math.floor(Math.pow(10, 14) * Math.random() * Math.random() * Math.random() * Math.random() * Math.random()) % (max - min + 1)) + min;
}

p_gesture_0.addEventListener('click', () => {
    if (lock === 0) {
        checkGesture(gesture[0])
        lock = 1;
    }

    lock
})

p_gesture_1.addEventListener('click', () => {
    if (lock === 0) {
        checkGesture(gesture[1])
        lock = 1;
    }
})

p_gesture_2.addEventListener('click', () => {
    if (lock === 0) {
        checkGesture(gesture[2])
        lock = 1;
    }
})

function checkGesture(p_choice) {
    computer_choosing()
    console.log(p_choice)
    if (p_choice === (ComputerChoice)) {
        verdict.innerHTML = `Its a Draw :|`
        verdict.style.left = `255px`
        verdict.style.color = `#f9a825`
    }
    else
        if (playerWin(p_choice)) {
            verdict.innerHTML = `You won!, congratulations :)`
            verdict.style.left = `195px`
            verdict.style.color = `#2e7d32`
            k++;
            playerWins.innerHTML = `${k}`
        } else {
            verdict.innerHTML = `Computer won :(`
            verdict.style.left = `237px`
            verdict.style.color = `#c62828`
            k++;
            compWins.innerHTML = `${k}`
        }
}

function computer_choosing() {
    let x = getRandomInt(0, 2)
    ComputerChoice = gesture[x]
    computerBtn.innerHTML = ComputerChoice
}

function playerWin(p_choice) {
    if (p_choice === `<img src="icons/rock.png" alt="">` && ComputerChoice === `<img src="icons/scissors.svg" alt="">`) {
        // when player chooses Rock and Computer chooses scissors
        return 1;
    } else if (p_choice === `<img src="icons/paper.png" alt="">` && ComputerChoice === `<img src="icons/rock.png" alt="">`) {
        // when player chooses Paper and Computer chooses Rock
        return 1;
    } else if (p_choice === `<img src="icons/scissors.svg" alt="">` && ComputerChoice === `<img src="icons/paper.png" alt="">`) {
        // when player chooses Scissors and Computer chooses Paper
        return 1;
    }
}

newGameBtn.addEventListener('click', () => {
    verdict.innerHTML = ``;
    lock = 0;

    computerBtn.innerHTML = `<div class="snippet" data-title="dot-pulse">
                            <div class="stage">
                                <h3>Computer Choosing</h3>
                                <div class="dot-pulse"></div>
                            </div>
                        </div>`;
    setTimeout(() => {
        computerBtn.innerHTML = `<div class="snippet" data-title="dot-pulse">
        <div class="stage">
            <h3>Computer  Choose</h3>
        </div>
    </div>`;
    }, 1000)
})

document.getElementById('clean').addEventListener('click', () => {
    k = 0;

    compWins.innerHTML = `${k}`
    playerWins.innerHTML = `${k}`
})