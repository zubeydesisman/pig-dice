
function PigDice (diceNumber, scoreTotal, turnTotal, currentUser) {
  this.diceNumber = diceNumber,
  this.turnTotal = turnTotal,
  this.currentUser = currentUser,
  this.user1 = 1,
  this.user2 = 2,
  this.score1 = 0,
  this.score2 = 0
}

var pigDice = new PigDice(1, 0, 0, 1);

PigDice.prototype.updateTurnTotal = function() {
  if(this.diceNumber === 1) {
    this.turnTotal = 0
  } else {
    this.turnTotal += this.diceNumber
  }
  $("input#throw-total").val(this.turnTotal);
}

PigDice.prototype.throwDice = function() {
  var diceRoll = Math.floor( Math.random() * 6 ) +1;
  $("input#dice").val(diceRoll);
  this.diceNumber = diceRoll;
  if(this.diceNumber === 1) {
    this.turnTotal = 0;
    this.switchUser();
  } else {
    this.turnTotal += this.diceNumber
  }
  $("input#throw-total").val(this.turnTotal);
  $("input#current-user").val(this.currentUser);
}

PigDice.prototype.clickHold = function() {
  $("input#dice").val("");
  $("input#throw-total").val("");
  if(this.currentUser === this.user1) {
    this.score1 += this.turnTotal;
    $("input#score1").val(this.score1);
  } else {
    this.score2 += this.turnTotal;
    $("input#score2").val(this.score2);
  }
  this.turnTotal = 0;
  this.switchUser();
  if(this.score1 >= 100 || this.score2 >=100) {
    $(".modal").modal();
    $("#close").click(() => {
      $(".modal").modal('hide');
    });
  }
  $("input#current-user").val(this.currentUser);
}
PigDice.prototype.switchUser = function() {
  if (this.currentUser === this.user1){
    this.currentUser = this.user2;
  } else {
    this.currentUser = this.user1;
  }
}
);
$(document).ready(function(){
  $("button#hold").on("click", function (event){
    event.preventDefault();
    pigDice.clickHold();
  });

  $("button#throw").on("click", function(event){
    event.preventDefault();
    pigDice.throwDice();
  });
});
