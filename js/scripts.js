var playerX = {mark: "X", turn: true, spaces: []};
var playerO = {mark: "O", spaces: []};
var tie = true

var winConditions = [
  ["b1", "b2", "b3"],
  ["b1", "b4", "b7"],
  ["b1", "b5", "b9"],
  ["b2", "b5", "b8"],
  ["b3", "b5", "b7"],
  ["b3", "b6", "b9"],
  ["b4", "b5", "b6"],
  ["b7", "b8", "b9"]
]

function mark() {
  if (playerX.turn === true) {
    playerX.turn = false;
    playerX.spaces.push(boxID)
    return playerX.mark
  } else {
    playerX.turn = true;
    playerO.spaces.push(boxID)
    return playerO.mark
  }
}

function checkForWin(conditions, playerSpaces, playerMark) {
  conditions.forEach(function(condition) {
    for(var i = 0; i < condition.length; i++) {
      if (playerSpaces.includes(condition[i]) == false) return false;
    }
    tie = false
    alert(playerMark + " wins!")
    return true;
  });
}

function checkForTie() {
  if (playerX.spaces.length + playerO.spaces.length == 9 && tie == true) {
    alert("It's a tie!")
  }
}

$(document).ready(function() {
  $(".col-xs-4").on("click", function() {
    boxID = $(this).attr("id");
    $(this).text(mark());
    $(this).off("click");
    checkForWin(winConditions, playerO.spaces, playerO.mark);
    checkForWin(winConditions, playerX.spaces, playerX.mark);
    checkForTie();
  });

  $("button").click(function() {
    document.location.reload();
  });
});
