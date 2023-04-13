//GAME - START BUTTON
const btn3 = document.getElementById('startGameBtn');
const clear = document.querySelectorAll('.game-div li');

function gameStart(){

    for (let i=0; i<clear.length; i++) {
        clear[i].textContent = '';
        clear[i].className = 'start';
        document.getElementById('game').style.display = 'flex';
        document.getElementById('gameOver').style.display = 'none';
        document.querySelector('#game p').style.display = 'block';
        count = 1;
        document.getElementById('gameOnName').textContent = document.getElementById('enteredNamePlayerOne').textContent;
    }
}

btn3.addEventListener('click', gameStart)

// PLAYING THE GAME

const target = document.querySelectorAll('.start');
let count = 1;

for (let i=0; i<target.length; i++){ 
    target[i].addEventListener("click", function() {
        count++;  
        if (count%2 === 0) {
            target[i].className = 'disabled';
            target[i].textContent = 'X';
            document.getElementById('gameOnName').textContent = document.getElementById('enteredNamePlayerTwo').textContent;
        }

        else {
            target[i].className = 'disabled';
            target[i].textContent = 'O';
            document.getElementById('gameOnName'). textContent = document.getElementById('enteredNamePlayerOne').textContent;
        }

        if ((target[0].textContent === 'X' && target[3].textContent === 'X' && target[6].textContent === 'X') ||
            (target[1].textContent === 'X' && target[4].textContent === 'X' && target[7].textContent === 'X') ||
            (target[2].textContent === 'X' && target[5].textContent === 'X' && target[8].textContent === 'X') ||
            (target[0].textContent === 'X' && target[1].textContent === 'X' && target[2].textContent === 'X') ||
            (target[3].textContent === 'X' && target[4].textContent === 'X' && target[5].textContent === 'X') ||
            (target[6].textContent === 'X' && target[7].textContent === 'X' && target[8].textContent === 'X') ||
            (target[0].textContent === 'X' && target[4].textContent === 'X' && target[8].textContent === 'X') ||
            (target[2].textContent === 'X' && target[4].textContent === 'X' && target[6].textContent === 'X')) {
            document.getElementById('gameOver').style.display = 'flex';
            document.querySelector('#gameOver h1').innerHTML = 'YOU WON ' + document.getElementById('enteredNamePlayerOne').textContent;
            document.querySelector('#game p').style.display = 'none';
            for (let i=0; i<target.length; i++) {
                target[i].className = 'disabled';
            }
        }

        else if ((target[0].textContent === 'O' && target[3].textContent === 'O' && target[6].textContent === 'O') ||
            (target[1].textContent === 'O' && target[4].textContent === 'O' && target[7].textContent === 'O') ||
            (target[2].textContent === 'O' && target[5].textContent === 'O' && target[8].textContent === 'O') ||
            (target[0].textContent === 'O' && target[1].textContent === 'O' && target[2].textContent === 'O') ||
            (target[3].textContent === 'O' && target[4].textContent === 'O' && target[5].textContent === 'O') ||
            (target[6].textContent === 'O' && target[7].textContent === 'O' && target[8].textContent === 'O') ||
            (target[0].textContent === 'O' && target[4].textContent === 'O' && target[8].textContent === 'O') ||
            (target[2].textContent === 'O' && target[4].textContent === 'O' && target[6].textContent === 'O')) {
            document.getElementById('gameOver').style.display = 'flex';
            document.querySelector('#gameOver h1').textContent = 'YOU WON ' + document.getElementById('enteredNamePlayerTwo').textContent;
            document.querySelector('#game p').style.display = 'none';
            for (let i=0; i<target.length; i++) {
                target[i].className = 'disabled';
            }
        }

        if(count === 10 && document.getElementById('gameOver').style.display === 'none'){
            document.querySelector('#gameOver h1').textContent = 'DRAW';
            document.querySelector('#game p').style.display = 'none';
            document.getElementById('gameOver').style.display = 'flex';
        }
    })
}