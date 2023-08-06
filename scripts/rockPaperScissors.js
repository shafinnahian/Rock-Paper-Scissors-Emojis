let compMove;
let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        losses: 0,
        ties : 0
    };  // calling out the saved items and converting from JSON to standard Javascript Object syntax.
        // || works as a default condition, if first half is false we will get to the next part, otherwise the first part. truthy || truthy or falsy || truthy.

// if (score === null){
//     score = {
//         win: 0,
//         losses: 0,
//         ties : 0
//     };
// }    //kept for reference of the above part
// updateMoves();
updateScoreElem();

function updateScoreElem(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win}, Loses: ${score.losses}, Ties: ${score.ties}`;
}
// function updateMoves(){
//     document.querySelector('.js-moves').innerHTML = `You chose ${playerMove}. Computer chose ${compMove}`;
// }

function pickCompMove(){
    const randNum = Math.random();

    if (randNum >= 0 && randNum < 1/3){
        compMove = 'Rock'; 
    }
    else if (randNum >= 1/3 && randNum < 2/3) {
        compMove = 'Paper';
    }
    else if (randNum >= 2/3 && randNum < 1) {
        compMove = 'Scissors';
    } 
}

function playGame(playerMove){
    pickCompMove();

    let result = '';

    if(playerMove === 'Scissors'){
        if (compMove === 'Rock') result = 'lost';
        else if (compMove === 'Paper') result = 'win'
        else if (compMove === 'Scissors') result = 'tie';

        }
    else if (playerMove === 'Paper'){
        if (compMove === 'Rock') result = 'win';
        else if (compMove === 'Paper') result = 'tie';
        else if (compMove === 'Scissors') result = 'lose';
    }
    else if (playerMove === 'Rock'){
        if (compMove === 'Rock') result = 'tie';
        else if (compMove === 'Paper') result = 'lose';
        else if (compMove === 'Scissors') result = 'win';
    }

    if (result === 'win') score.win += 1;
    else if (result === 'lose') score.losses += 1;
    else if (result === 'tie') score.ties += 1;

    localStorage.setItem('score', JSON.stringify(score)); // saving the scores permenantly. localStorage can only take strings so implementing stringify() on score object.

    // updateMoves();
    updateScoreElem();

    document.querySelector('.js-scores').innerHTML = result;
    // updateMoves();
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> Computer <img src="images/${compMove}-emoji.png" class="move-icon">`;
}