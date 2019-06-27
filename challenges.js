var score, currentScore, currentPlayer, isPlaying, input;

function newGame() {
    score = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    input = 0;
    isPlaying = true;

    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').innerHTML = '0';
    document.getElementById('score-1').innerHTML = '0';
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    document.getElementById('player-0').classList.remove('winner');
    document.getElementById('player-0').classList.add('active');
    document.getElementById('player-1').classList.remove('winner');
    document.getElementById('player-1').classList.remove('active');
}

function roll() {
    if (isPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        if (dice1 !== 1 && dice2 !== 1) {
            currentScore += dice1 + dice2;
            document.getElementById('current-' + currentPlayer).innerHTML = currentScore;
        }
        else {
            nextPlayer();
        }
    }
}

function hold() {
    if (isPlaying) {
        score[currentPlayer] += currentScore;
        document.getElementById('score-' + currentPlayer).innerHTML = score[currentPlayer];

        if (input) {
            isWinner();
        }
        else {
            input = 100;
            isWinner();
        }
    }
}

function nextPlayer() {
    currentScore = 0;
    document.getElementById('current-' + currentPlayer).innerHTML = currentScore;

    document.getElementById('player-' + currentPlayer).classList.remove('active');
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    document.getElementById('player-' + currentPlayer).classList.add('active');

}

function isWinner() {
    if (score[currentPlayer] >= input) {
        isPlaying = false;
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.getElementById('name-' + currentPlayer).innerHTML = 'Winner!';
        document.getElementById('player-' + currentPlayer).classList.add('winner');
        document.getElementById('player-' + currentPlayer).classList.remove('active');
    }
    else {
        nextPlayer();
    }
}

function finalScore() {
    input = document.querySelector('.final-score').value;
    console.log(input);
}












