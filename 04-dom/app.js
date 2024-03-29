/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// User changing rules implementation

var scores, roundScore, activePlayer, gamePlaying, oldDice, oldDiceNew, gameMax;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * (6) +1);
        var diceNew = Math.floor(Math.random() * (6) +1);

        // 2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display  =  'block';
        diceDOM.src = 'dice-' + dice + '.png';

        var diceNewDOM = document.querySelector('.dice-new')
        diceNewDOM.style.display  =  'block';
        diceNewDOM.src = 'dice-' + diceNew + '.png';
        

        // 3. Update the round score only IF result is NOT equal 1
        if (dice !== 1 && diceNew !== 1) {
            //add score
            if ((dice === 6 && oldDice === 6) || (diceNew === 6 && oldDiceNew === 6)) {
                roundScore = 0;
                scores[activePlayer] = 0;
                document.getElementById('current-'+ activePlayer).textContent = roundScore;
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            }
            else {
                oldDice = dice;
                roundScore += dice;

                oldDiceNew = diceNew;
                roundScore += diceNew;
                document.getElementById('current-'+ activePlayer).textContent = roundScore;
            }
            
        }
        else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        
        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if plater won the game
        if (scores[activePlayer] >= gameMax) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display  =  'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        else {
            nextPlayer ();
        }
    }

    

});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    oldDice = 0;
    oldDiceNew = 0;
    gamePlaying = true;

    // Ask user to set max score, if score is undefined or NaN use 100
    // gameMax = prompt ('Please choose win game score', 100);
    // Number(gameMax) ? gameMax = Number(gameMax) : gameMax = 20;
    gameMax = 200;

    document.querySelector('.dice').style.display  =  'none';
    document.querySelector('.dice-new').style.display  =  'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer () {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    oldDice = 0;

    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active'); 
    document.querySelector('.dice').style.display  =  'none'; 
    document.querySelector('.dice-new').style.display  =  'none'; 
}


// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = '<em>' +  dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);