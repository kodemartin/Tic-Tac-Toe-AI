/*
 * This script lets the user choose 
 * which side to play (X or O). It 
 * saves the choice on global variables, 
 * subsequently called on the main algorithm
 *
 * For further information on the html elements (e.g #whoplays)
 * see main.html and layout.css
 */
$("#whoplays").html("Choose side and press play when ready. X starts first.");
// Define the global variables
var human;
var robot;

$(".player").each(function(){
    $(this).on("click", function(){
        human = $(this).text().trim();
        robot = human === "X" ? "O" : "X";
        $("#side").text(human);
        $("#whoplays").html("You will play with " + human + "<br>Press " + $("#play").html()+ " when ready.");
    })
});

/* Function to clear the board on rematch
 * request.
 */
function rematch() {
    $("td").each(function(index){
        $(this).removeClass("occupied");
        $(this).html("");
    })
}

