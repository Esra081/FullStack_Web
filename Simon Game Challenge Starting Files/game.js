$("h1").css("color","purple");

var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];

var userClickedPattern = [];

var keyPressed = false;
var level = 0;

function playSound(name) {    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    $("h1").text("Level " + level);
    level += 1;
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);


    if (userClickedPattern.length === level){
        checkAnswer(level);
    }


});

function animatePress(currentColour) {

    var clickedButton = $("." + currentColour);

    clickedButton.addClass("pressed");

    setTimeout(function() {
        clickedButton.removeClass("pressed");
    }, 100)


}

$(document).keydown(function(event) {
  if (!keyPressed) {
    keyPressed = true;
    nextSequence();
    $("h1").text("Level 0");
  }

  


});

function checkAnswer(currentLevel) {
  for (var i = 0; i < currentLevel; i++) {
    if (userClickedPattern[i] !== gamePattern[i]) {
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        return;

    }
  }

  userClickedPattern = [];
  setTimeout(nextSequence, 1000);
}

function startOver(){
    level = 0;
    gamePattern=[];
    userClickedPattern=[];
    keyPressed = false;

}

