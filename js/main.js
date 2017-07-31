const $el = {
  container: document.querySelector(".container"),
  winner: document.querySelector(".winner")
};
let gameFinished = false;

// X and O values and it starts with "O" and then goes to "X"
let currentValue = "O";

function mainFunction(e) {
  if (gameFinished) return;
  if (e.target.innerHTML === "") {
    if (currentValue === "O") {
      e.target.innerHTML = currentValue;
      currentValue = "X";
    } else if (currentValue === "X") {
      e.target.innerHTML = currentValue;
      currentValue = "O";
    }
  }
  saveCheck(e);
}
// save and check through to see if "three" Os and/or Xs are there to select the winner
const safeArr = {};

function saveCheck(e) {
  // Stops the same values from adding into the object
  if (safeArr[e.target.id] !== e.target.innerHTML) {
    safeArr[e.target.id] = e.target.innerHTML;
  }
  //Checking Horizontally/Vertically/Diagonally
  function winnerCheck(value) {
    if ((safeArr.one === value && safeArr.second === value && safeArr.third === value) ||
      (safeArr.forth === value && safeArr.fifth === value && safeArr.sixth === value) ||
      (safeArr.seven === value && safeArr.eight === value && safeArr.nine === value) ||
      (safeArr.one === value && safeArr.forth === value && safeArr.seven === value) ||
      (safeArr.second === value && safeArr.fifth === value && safeArr.eight === value) ||
      (safeArr.third === value && safeArr.sixth === value && safeArr.nine === value) ||
      (safeArr.one === value && safeArr.fifth === value && safeArr.nine === value) ||
      (safeArr.third === value && safeArr.fifth === value && safeArr.seven === value)
    ) {
      winnerChosen();
    } //DRAW condition - if there are 9 keys in object and yet no winner is chosen then it is draw!
    else if (Object.keys(safeArr).length === 9) {
      $el.winner.innerHTML = `&#x2623; NO Player Wins! &#x2620;`;
      console.log($el.winner.innerHTML);
    }
  }
  // Coverting "O" to actual "Os" and "X" to Xs.
  let realValue = ((currentValue === "X") && "O") || ((currentValue === "O") && "X")
  winnerCheck(realValue);
}
// Who wins? After selecting the winner, the text is embedded into the div.
function winnerChosen() {
  if (currentValue === "X") {
    $el.winner.innerHTML = `&hearts; First Player Wins! &#x263A;`;
    console.log($el.winner.innerHTML);
  } else if (currentValue === "O") {
    $el.winner.innerHTML = `&hearts; Second Player Wins! &#x263A;`;
    console.log($el.winner.innerHTML);
  }
  gameFinished = true;
}


$el.container.addEventListener("click", mainFunction);
