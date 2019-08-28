//Business logic
// User constructor
function User (diceNumber, scoreTotal, turnTotal, userNumber) {
  this.diceNumber = diceNumber,
  this.scoreTotal = scoreTotal,
  this.turnTotal = turnTotal,
  this.userNumber = userNumber
}

User.prototype.isOne = function(diceRoll) {
  this.diceNumber = diceRoll;
  console.log("current dice Number: ", this.diceNumber);
  if(this.diceNumber === 1) {
    this.turnTotal = 0;
    switchUser();
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
  currentUser.isOne(diceRoll);
}

// User Interface logic
function clickHold() {
  $("input#dice").val("");
    $("input#throw-total").val("");
    currentUser.scoreTotal += currentUser.turnTotal;
    $("input#score1").text(currentUser.scoreTotal);
    $("input#score2").text(currentUser.scoreTotal);
}

function switchUser() {
  if (currentUser == user1){
    currentUser = user2;
  } else {
    currentUser = user1;
  }
  console.log("CurrentUser is ", currentUser.userNumber);
}

var user1 = new User(1, 0, 0, 1);
var user2 = new User(1, 0, 0, 2);

var currentUser = user1;


$(document).ready(function(){
    console.log("CurrentUser is ", currentUser.userNumber);
  $("button#hold").on("click", function (event){
    event.preventDefault();
    clickHold();
    switchUser();
    console.log("CurrentUser is ", currentUser.userNumber);
  });

  $("button#throw").on("click", function(event){
    event.preventDefault();
    throwDice();
  });


});
