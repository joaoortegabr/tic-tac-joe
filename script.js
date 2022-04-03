let player;
let winner;
let selectedPlayer = document.getElementById('selected-player');
let selectedWinner = document.getElementById('selected-winner');
let wLine = document.getElementById('winner-line');
let pLine = document.getElementById('player-line');

changePlayer("X");

function selectSquare(id) {

    if (winner != null) {
        return;
    }

    let square = document.getElementById(id);

    if(square.innerHTML == "X" || square.innerHTML == "O") {
        return;
    }

    square.innerHTML = player;

    if(player == "X") {
        player = "O";
        square.style.color = '#f00';
//      square.style.backgroundImage = 'url(./face1.png)';

    } else {
        player = "X";
        square.style.color = '#000';
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
    let sq1 = document.getElementById(1);
    let sq2 = document.getElementById(2);
    let sq3 = document.getElementById(3);
    let sq4 = document.getElementById(4);
    let sq5 = document.getElementById(5);
    let sq6 = document.getElementById(6);
    let sq7 = document.getElementById(7);
    let sq8 = document.getElementById(8);
    let sq9 = document.getElementById(9);

    if(checkSequence(sq1, sq2, sq3)) {
        changeSquareColor(sq1, sq2, sq3);
        displayWinner(sq1);
        return;
    }
    if(checkSequence(sq4, sq5, sq6)) {
        changeSquareColor(sq4, sq5, sq6);
        displayWinner(sq4);
        return;
    }
    if(checkSequence(sq7, sq8, sq9)) {
        changeSquareColor(sq7, sq8, sq9);
        displayWinner(sq7);
        return;
    }
    if(checkSequence(sq1, sq4, sq7)) {
        changeSquareColor(sq1, sq4, sq7);
        displayWinner(sq1);
        return;
    }
    if(checkSequence(sq2, sq5, sq8)) {
        changeSquareColor(sq2, sq5, sq8);
        displayWinner(sq2);
        return;
    }
    if(checkSequence(sq3, sq6, sq9)) {
        changeSquareColor(sq3, sq6, sq9);
        displayWinner(sq3);
        return;
    }
    if(checkSequence(sq1, sq5, sq9)) {
        changeSquareColor(sq1, sq5, sq9);
        displayWinner(sq1);
        return;
    }
    if(checkSequence(sq3, sq5, sq7)) {
        changeSquareColor(sq3, sq5, sq7);
        displayWinner(sq3);
        return;
    }
}

function displayWinner(square) {
    pLine.style.display = 'none';
    wLine.style.display = 'block';
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3) {
    square1.style.background = '#00ee00';
    square2.style.background = '#00ee00';
    square3.style.background = '#00ee00';
}

function checkSequence(square1, square2, square3) {
    let isEqual = false;
    if (square1.innerHTML == "X" || square1.innerHTML == "O") {
        if (square1.innerHTML == square2.innerHTML && square2.innerHTML == square3.innerHTML) {
            isEqual = true;
        }
    return isEqual;
    }
}

function restartGame() {
    winner = null;
    selectedWinner.innerHTML = "";
    for(i = 1; i <= 9; i++) {
        let square = document.getElementById(i);
        square.style.background = '#eee';
        square.innerHTML = "";
    }
    changePlayer("X");
    pLine.style.display = 'block';
    wLine.style.display = 'none';
}

