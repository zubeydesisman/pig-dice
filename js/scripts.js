//Business logic

// User constructor
function User (diceNumber, scoreTotal, turnTotal) {
  this.diceNumber = diceNumber,
  this.scoreTotal = scoreTotal,
  this.turnTotal = turnTotal
}

User.prototype.isOne = function() {
  if(this.diceNumber === 1){
    this.turnTotal = 0;
  } else {
    return this.diceNumber;
  }
}

User.prototype.calcTurnTotal = function() {
    this.turnTotal += this.diceNumber;
}

// Todo: Check through dice and update turn total, continue the user throw 1 or click hold

// Todo: if the user get 1, turn total will be cleared out and turn ends and
// if the user click hold, turn total will be added to sore total then turn ends
// every times turn ends turnNumber++

// Todo: When a user sore total becomes more than 100, the user wins.

// Get random dice number
function throwDice () {
  var diceRoll = Math.floor( Math.random() * 6 ) +1;
  console.log(diceRoll);
  User.isOne(); // Need to be updated
}

// User Interface logic
function clickHold() {
    $("input#throw-total1").val("");
    $("input#throw-total2").val("");
    this.scoreTotal += this.turnTotal;
    $("input#score1").text(this.scoreTotal);
    $("input#score2").text(this.scoreTotal);
}

$(document).ready(function(){

  $("button#hold").on("click", function(event) {
    event.preventDefault();
    clickHold();
  });
});
