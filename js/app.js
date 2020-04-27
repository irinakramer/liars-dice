/**
 * Pseudocode:
 * Generate random number 1-6 for variable random1
 * Generate random number 1-6 for variable random2
 * firstDie will be assigned a value 'dice-random1'
 * secondDie will be assigned a value 'dice-random2'
 * get the first die by ID and update its class to firstDie 
 * get the second die by ID and update its class to secondDie 
 * diceRoll function 
 * when user clicks the button the diceRoll funtion runs
 */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//   //console.log(getRandomInt(1, 7));

//   let random1 = getRandomInt(1, 7);
//   let random2 = getRandomInt(1, 7);
//   const firstDie = 'dice-' + random1;
//   const secondDie = 'dice-' + random2;

//   // console.log(firstDie, secondDie);

//   function diceRoll() {
//     document.getElementById("first-die").className = "dice " + firstDie;
//     document.getElementById("second-die").className = "dice " + secondDie;
//   }
//   document.getElementById("roll-dice").onclick = diceRoll;

//   document.getElementById("roll-dice").addEventListener("click", function() {
//     document.getElementById("first-die").className = "dice " + firstDie;
//     document.getElementById("second-die").className = "dice " + secondDie;
//   }); 

/////////////

function diceRoll() {
    const random1 = getRandomInt(1, 7);
    const random2 = getRandomInt(1, 7);
    const random3 = getRandomInt(1, 7);
    const random4 = getRandomInt(1, 7);
    const random5 = getRandomInt(1, 7);
    const firstDie = 'dice-' + random1;
    const secondDie = 'dice-' + random2;
    const thirdDie = 'dice-' + random3;
    const fourthDie = 'dice-' + random4;
    const fifthDie = 'dice-' + random5;

    document.getElementById("first-die").className = "dice " + firstDie;
    document.getElementById("second-die").className = "dice " + secondDie;
    document.getElementById("third-die").className = "dice " + thirdDie;
    document.getElementById("fourth-die").className = "dice " + fourthDie;
    document.getElementById("fifth-die").className = "dice " + fifthDie;
}

document.getElementById("roll-dice").onclick = diceRoll;

