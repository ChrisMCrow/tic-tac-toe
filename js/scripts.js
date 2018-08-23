var playerX = {mark: "X", turn: false, spaces: []};
var playerO = {mark: "O", turn: true, spaces: []};
var boxID = ""

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

function checkForWin(spaceArray) {
  console.log(spaceArray)
  if (spaceArray.includes("b1") && spaceArray.includes("b2") && spaceArray.includes("b3")) {
    alert("You Win!");
  } else if (spaceArray.includes("b1") && spaceArray.includes("b4") && spaceArray.includes("b7")) {
      alert("You Win!");
  } else if (spaceArray.includes("b1") && spaceArray.includes("b5") && spaceArray.includes("b9")) {
      alert("You Win!");
  } else if (spaceArray.includes("b2") && spaceArray.includes("b5") && spaceArray.includes("b8")) {
      alert("You Win!");
  } else if (spaceArray.includes("b3") && spaceArray.includes("b5") && spaceArray.includes("b7")) {
      alert("You Win!");
  } else if (spaceArray.includes("b3") && spaceArray.includes("b6") && spaceArray.includes("b9")) {
      alert("You Win!");
  } else if (spaceArray.includes("b4") && spaceArray.includes("b5") && spaceArray.includes("b6")) {
      alert("You Win!");
  } else if (spaceArray.includes("b7") && spaceArray.includes("b8") && spaceArray.includes("b9")) {
      alert("You Win!");
  }
}

$(document).ready(function(){
  $(".col-xs-4").on("click", function() {
    boxID = $(this).attr("id");
    $(this).text(mark());
    $(this).off("click");
    checkForWin(playerX.spaces);
    checkForWin(playerO.spaces);
  });
  $("button").click(function() {
    document.location.reload();
  })
});
