// Iteration 5: Store the player score and display it on the game over screen
let score=localStorage.getItem('score');
console.log(score);
var realScore = document.getElementById('score-board');
var play = document.getElementById('play-again-button');

realScore.innerText+=score;
play.onclick = () => {
    location.href = './game.html'
}