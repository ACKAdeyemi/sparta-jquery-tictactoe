$(document).ready(function(){
  // Code goes here
  var turnVal = 1;
  var play = true;
  var $grid = $('td'); // links to every square
  var $reset = $('#reset');

  var $turnTxt = $('.playerTurn');

  $('td').click(function(){
    console.log("Square clicked"); // test you can click the squares
    console.log(`Value of square is ${$(this).data().num}`); // data-num attribut value of clicked square

    // checking for empty square and play mode to be true
    if ($(this).text() == "" && play) {
      if ((turnVal % 2) == 1) { //
        $(this).append("X"); // append the letter X
        $(this).addClass('X'); // give it the class defined in the css doc
        $turnTxt.text("It is O's turn");
      }
      else {
        $(this).append("O");
        $(this).addClass('O');
        $turnTxt.text("It is X's turn");
      }
      turnVal++;
      console.log(`Turn Counter Value is ${turnVal}`);
    } // X and O turn if statement with nested if else ---- end

    // code below checks for win condition and checks that there aren't any empty squares, then it checks for X as the returned value, if it can't find X then it checks for O - if nothing found, all squares are filled and playeds to reset
    if (checkForWinner()!=-1 && checkForWinner()!="") {
      if (checkForWinner()=="X") {
        alert('Player X wins! Press RESET BOARD TO PLAY AGAIN...');
      } else if (checkForWinner()=="O") {
        alert('Player O wins! Press RESET BOARD TO PLAY AGAIN...');
      }
      play = false;
    } // check for winner function if statement ----------- end

  }); // squared clicked function ------------------------- end

  function checkForWinner() {
    // get value of each square and store in variable, stores X or O
    var square0 = $("table thead tr:nth-child(1) td:nth-child(1)").text();
    var square1 = $("table thead tr:nth-child(1) td:nth-child(2)").text();
    var square2 = $("table thead tr:nth-child(1) td:nth-child(3)").text();
    var square3 = $("table tbody tr:nth-child(1) td:nth-child(1)").text();
    var square4 = $("table tbody tr:nth-child(1) td:nth-child(2)").text();
    var square5 = $("table tbody tr:nth-child(1) td:nth-child(3)").text();
    var square6 = $("table tfoot tr:nth-child(1) td:nth-child(1)").text();
    var square7 = $("table tfoot tr:nth-child(1) td:nth-child(2)").text();
    var square8 = $("table tfoot tr:nth-child(1) td:nth-child(3)").text();
    // code belows checks all possible win conditions, if 3 of the same type are found, return the value (X or O) of the square
    // check rows
    if      ((square0==square1) && (square1==square2)) { return square2; }
    else if ((square3==square4) && (square4==square5)) { return square5; }
    else if ((square6==square7) && (square7==square8)) { return square8; }
    // check columns
    else if ((square0==square3) && (square3==square6)) { return square6; }
    else if ((square1==square4) && (square4==square7)) { return square7; }
    else if ((square2==square5) && (square5==square8)) { return square8; }
    // check diagonals
    else if ((square0==square4) && (square4==square8)) { return square8; }
    else if ((square2==square4) && (square4==square6)) { return square6; }
      // no winner
    return -1;
  } // check for winner function ------------------------- end

  $reset.click(function() {
    play = true;
    $turnTxt.text("It is X's turn");
    $grid.text('');
    $grid.removeClass('X');
    $grid.removeClass('O');
    turnVal = 1;
    console.log(`SQUARES RESET. Turn Counter Value is ${turnVal}`);
    console.log('Reset Clicked');
  }); // reset button function --------------------------- end

}); // DOM ----------------------------------------------- end
