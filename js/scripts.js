var playerX = {mark: "X", turn: false, spaces: []};
var playerO = {mark: "O", turn: true, spaces: []};

var condition1 = ["b1", "b2", "b3"]
var winConditions = [
  ["b1", "b2", "b3"]
  ["b1", "b4", "b7"]
]
// condition2 =
// condition3 = ["b1", "b2", "b3"]
// condition1 = ["b1", "b2", "b3"]
// condition1 = ["b1", "b2", "b3"]
// condition1 = ["b1", "b2", "b3"]
// condition1 = ["b1", "b2", "b3"]
// condition1 = ["b1", "b2", "b3"]


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

function checkForWin(conditions, playerSpaces) {
  console.log(conditions);
  console.log(playerSpaces);
  // conditions.forEach(function(condition) {
    for(var i = 0; i < conditions.length; i++) {
      if($.inArray(conditions[i], playerSpaces) == -1)
      return false;
    }
    return true;
  // });
}

$(document).ready(function() {
  $(".col-xs-4").on("click", function() {
    boxID = $(this).attr("id");
    $(this).text(mark());
    $(this).off("click");
    // checkForWin(condition1, playerX.spaces);
    if (checkForWin(condition1, playerO.spaces)) {alert("O wins!")}
    if (checkForWin(condition1, playerX.spaces)) {alert("X wins!")}
  });
  $("button").click(function() {
    document.location.reload();
  });
});
