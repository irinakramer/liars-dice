/**
 * Pseudocode:
 * Function to generate random numbers 1-6 - getRandomInt(min,max).
 * Function to iterate over DOM dice elements and 
 * set classes with the correct number dice,
 * or to paint dark for non-playing dice - diceRoll(n).
 * Set onclick event for all buttons and call diceRoll() function.
 * */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function diceRoll(n) {
    for (let i = 1; i <= n; i++) {
        const elemId = i.toString() + "-die";
        document.getElementById(elemId).className = "dice " + "dice-" + getRandomInt(1, 7);
    }
    for (let j = (n + 1); j <= 5; j++) {
        const elemIdDark = j.toString() + "-die";
        document.getElementById(elemIdDark).className = "dice " + "dice-dark";
    }
}
document.getElementById("roll-five").onclick = () => diceRoll(5);
document.getElementById("roll-four").onclick = () => diceRoll(4);
document.getElementById("roll-three").onclick = () => diceRoll(3);
document.getElementById("roll-two").onclick = () => diceRoll(2);
document.getElementById("roll-one").onclick = () => diceRoll(1);
