// record game sequence pattern container
const gamePattern = [];

// storage the user clicks
const userClickedPattern = [];

// randomly output one of four colours
const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4)
  const buttonColours = ["red", "blue", "green", "yellow"];
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // animation with audio played
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
};

// handler of user chosen colour
const userChosenColour = function () {
  $("div[type='button']").on("click", function () {
    let clickedButton = $(this).attr("id");
    userClickedPattern.push(clickedButton);
  });
};

// play sound effect 
const playSound = function () {
  // animation with audio played
  $("div[type='button']").on("click", function () {
    $("#" + $(this).attr("id")).fadeIn(100).fadeOut(100).fadeIn(100);
    const audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
    audio.play();
  });
};