var playerX = {name: "X", turn: false}
var playerO = {name: "O"}




$(document).ready(function(){
  $(".col-xs-4").click(function() {
    playerX.turn = !playerX.turn;
    if (playerX.turn === false){
      $(this).text(playerO.name);
    } else {
      $(this).text(playerX.name);
    }

    // }
    // playerO.turn = !playerO.turn
    // console.log(playerX.turn)
  });
});
