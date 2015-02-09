var queenAttack = function(queen_array, opponent_array) {
  if (queen_array[0] === opponent_array[0] || queen_array[1] === opponent_array[1] || ((queen_array[0] - queen_array[1]) === (opponent_array[0] - opponent_array[1]))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var queenX = parseInt($("input#queenX").val());
    var queenY = parseInt($("input#queenY").val());
    var opponentX = parseInt($("input#opponentX").val());
    var opponentY = parseInt($("input#opponentY").val());

    var result = queenAttack([queenX, queenY], [opponentX, opponentY]);

    $(".queenX").text(queenX);
    $(".queenY").text(queenY);
    $(".opponentX").text(opponentX);
    $(".opponentY").text(opponentY);

    if (!result) {
      $(".not").text("not");
    } else if (result) {
      $(".not").text(" ");
    }


    $("#result").show();
    event.preventDefault();
  });
});
