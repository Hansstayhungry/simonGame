// record game sequence pattern container
let gamePattern = [];

// storage the user clicks
let userClickedPattern = [];

// storage level
let level = 0;

// game start toggle
let gameStart = false;

// // keypress container
// let keypress = [];

// game over toggle
let gameOver = false;

// game over handler
const gameOverHandler = function () {

  // play you got it wrong sound
  const audioWrong = new Audio("sounds/wrong.mp3");
  audioWrong.play();

  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 500);

  // reset
  gameStart = false;

  gamePattern = [];
  level = 0;
  // keypress.length = 0;

  gameOver = false;
}

// press any key to start the game
$(document).on("keypress", function(event) {
  // call to start the game
  if (!gameStart) {
    gameStart = true;

    nextSequence();
  }

});

// handler of user chosen colour
$(".btn").on("click", function () {
  let clickedButton = $(this).attr("id");
  userClickedPattern.push(clickedButton);

  playSound(clickedButton);

  checkAnswer(userClickedPattern.length -1);
});

// check answer
const checkAnswer = function (currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
    } 
  } else {
      gameOver = true;
      gameOverHandler();
  };
};

// randomly output one of four colours
const nextSequence = function () {
  level++;
  userClickedPattern = [];

  $("h1").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4)
  const buttonColours = ["red", "blue", "green", "yellow"];
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // animation with audio played
  const randomColourHandler = function () {
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  }

  randomColourHandler();
};

// user click button
const playSound = function (buttonId) {
  // audio played
    const audio = new Audio("sounds/" + buttonId + ".mp3");
    audio.play();
    // animation effect
    $("#" + buttonId).addClass("pressed");

    // remove animation effect after 100ms
    setTimeout(function () {
      $("#" + buttonId).removeClass("pressed")
    }, 100);
  // });
};