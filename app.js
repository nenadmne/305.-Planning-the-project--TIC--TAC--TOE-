// player - One, edit name button

const btn1 = document.getElementById('playerOneBtn');

function popUpPlayerOne(){
    document.getElementById('chosePlayerNameOne').style.display = 'block';
}

btn1.addEventListener('click', popUpPlayerOne);

// player - One, Submit name button

const confirmOne = document.getElementById('confirmationOne')

function changeNamePlayerOne(){
    const playerOneName = document.getElementById('inputPlayerOne').value;
    if(playerOneName.length >= 3){
        document.getElementById('enteredNamePlayerOne').textContent = playerOneName;
        document.getElementById('inputPlayerOne').style.border = 'none'
        document.getElementById('chosePlayerNameOne').style.display = 'none';
        if(document.querySelector('#chosePlayerNameOne p')) {
            document.querySelector('#chosePlayerNameOne p').parentElement.removeChild(document.querySelector('#chosePlayerNameOne p'));
        }
    }
    else {
        document.getElementById('inputPlayerOne').style.border = '2px solid red';
        const alertMsgOne = document.createElement('p');
        alertMsgOne.className = 'warning';
        alertMsgOne.textContent = 'Name must contain minimum 3 symbols'
        if(!document.querySelector('#chosePlayerNameOne p')) {
            document.querySelector('#chosePlayerNameOne label').append(alertMsgOne);
        }
    }
}

confirmOne.addEventListener('click', changeNamePlayerOne);

// player - Two, edit name button

const btn2 = document.getElementById('playerTwoBtn');

function popUpPlayerTwo(){
    document.getElementById('chosePlayerNameTwo').style.display = 'block';
}

btn2.addEventListener('click', popUpPlayerTwo);

// player - Two, Submit name button

const confirmTwo = document.getElementById('confirmationTwo')

function changeNamePlayerTwo(){
    const playerTwoName = document.getElementById('inputPlayerTwo').value;
    if(playerTwoName.length >= 3){
        document.getElementById('enteredNamePlayerTwo').textContent = playerTwoName;
        document.getElementById('inputPlayerTwo').style.border = 'none'
        document.getElementById('chosePlayerNameTwo').style.display = 'none';
            if(document.querySelector('#chosePlayerNameTwo p')) {
                document.querySelector('#chosePlayerNameTwo p').parentElement.removeChild(document.querySelector('#chosePlayerNameTwo p'));
            }
    }
    else {
        document.getElementById('inputPlayerTwo').style.border = '2px solid red';
        const alertMsgTwo = document.createElement('p');
        alertMsgTwo.className = 'warning';
        alertMsgTwo.textContent = 'Name must contain minimum 3 symbols'
        if(!document.querySelector('#chosePlayerNameTwo p')) {
            document.querySelector('#chosePlayerNameTwo label').append(alertMsgTwo);
        }
    }
}

confirmTwo.addEventListener('click', changeNamePlayerTwo);

// Cancel name edit, Player - One

const cancelNameOne = document.getElementById('cancelOne');

function cancelOne(){

document.getElementById('enteredNamePlayerOne').textContent = 'PLAYER 1 NAME';
document.getElementById('inputPlayerOne').value = '';
document.getElementById('chosePlayerNameOne').style.display = 'none';
if(document.querySelector('#chosePlayerNameOne p')) {
    document.querySelector('#chosePlayerNameOne p').parentElement.removeChild(document.querySelector('#chosePlayerNameOne p'));
    document.getElementById('inputPlayerOne').style.border = 'none';
}

}

cancelNameOne.addEventListener('click', cancelOne)

// Cancel name edit, Player - Two

const cancelNameTwo = document.getElementById('cancelTwo');

function cancelTwo(){

document.getElementById('enteredNamePlayerTwo').textContent = 'PLAYER 2 NAME';
document.getElementById('inputPlayerTwo').value = '';
document.getElementById('chosePlayerNameTwo').style.display = 'none';
if(document.querySelector('#chosePlayerNameTwo p')) {
    document.querySelector('#chosePlayerNameTwo p').parentElement.removeChild(document.querySelector('#chosePlayerNameTwo p'));
    document.getElementById('inputPlayerTwo').style.border = 'none';
}

}

cancelNameTwo.addEventListener('click', cancelTwo)