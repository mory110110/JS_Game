// // declares global variables accessible outside a function
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;
let displayWon = document.getElementById("won")
let displayLost = document.getElementById('lost')
let displayTied = document.getElementById('tied')
let displayPlayed = document.getElementById('played')
// main gameplay function
function rockPaperScissors(x) {
    let player1 = x; // pick is set to the passed-in parameter (from html)
    let choice = document.getElementById('choice'); // to show player choice
    let flip = document.getElementById('flip'); // to show flip result
    let result = document.getElementById('result'); // to show game result

    // Determines the face of the toss
    let randNum = Math.ceil(Math.random() * 3); // randomly a 1 or 2 or 3
    let player2; // to hold the toss result
    setTimeout(() => {
        if (randNum === 1) {
            player2 = 'Rock';
        } else if (randNum === 2) {
            player2 = 'Paper';
        } else {
            player2 = 'Scissors'
        }
        // determines the result of guess
        let status; // to hold the result of the guess
        if (player1 === player2) {
            status = "This is a Tie!";
            gamesTied++
            // gamesWon++; // increments win counter
        } else if  (player1 === "Rock" && player2 === "Scissors" ||
                    player1 === "Paper" && player2 === "Rock" ||
                    player1 === "Scissors" && player2 === "Paper") {
            
            status = "You Win!"
            gamesWon++
        } else {
            status = 'You Lose!';
            gamesLost++
            // gamesLost++; // increments loss counter
        }
        
        gamesPlayed++
        // gamesPlayed++; // increments games count

        let displayWon = document.getElementById("won")
        let displayLost = document.getElementById('lost')
        let displayTied = document.getElementById('tied')
        let displayPlayed = document.getElementById('played')
        // read-outs of the game results
        choice.innerText = player1;
        flip.innerText = player2;
        result.innerText = status;

        // // updates game history
        displayPlayed.innerText = gamesPlayed;
        displayWon.innerText = gamesWon;
        displayLost.innerText = gamesLost;
        displayTied.innerText = gamesTied

      }, 500);
    

    
}

function resetScore() {
    gamesPlayed = 0
    gamesWon = 0
    gamesLost = 0
    console.log
    // reset game history
    displayPlayed.innerText = gamesPlayed;
    displayWon.innerText = gamesWon;
    displayLost.innerText = gamesLost;
}

// // resets the scoreboard, invoked from onclick in html
// function resetScore() {

//     // resets the score
//     gamesPlayed = 0;
//     gamesWon = 0;
//     gamesLost = 0;

//     // updates the display
//     displayPlayed.innerText = gamesPlayed;
//     displayWon.innerText = gamesWon;
//     displayLost.innerText = gamesLost;    
// }

// // Shows how to pass a paremeter
// function flipCoin(pick) {
//     let choice = document.getElementById('choice');
//     choice.innerText = pick;
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     let toss;
//     if (randNum == 1) {
//         toss = 'Tails';
//     } else {
//         toss = 'Heads';
//     }
//     display.innerText = toss;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     display.innerText = randNum;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     // let randNum = Math.ceil(Math.random() * 4); // --> 1 to 4
//     // let randNum = Math.ceil(Math.random() * 2); // --> 1 or 2
//     // let randNum = Math.floor(Math.random() * 2); // --> 0 or 1
//     // let randNum = Math.ceil(Math.random()); // rounds up to integer
//     // let randNum = Math.floor(Math.random()); // rounds down to integer
//     let randNum = Math.random(); // generates digits between 0 and 1
//     display.innerText = randNum;
    
//     // logs randNum in the console (browser inspector)
//     console.log(randNum);
// }

// function flipCoin(x) {

//     let pick = x;

//     let result = document.getElementById('flip');
//     let choice = document.getElementById('choice');
//     let game = document.getElementById('result');

//     let randNum = Math.ceil(Math.random() * 2);

//     let face;
//     if (randNum == 1) {
//         face = "Heads";
//     } else {
//         face = "Tails";
//     }

//     let status;
//     if (face == choice) {
//         status = "Win";
//     } else {
//         status = "Loss";
//     }

//     result.innerText = face;
//     choice.innerText = pick;
//     game.innerText = status;

//     console.log(randNum);

// }