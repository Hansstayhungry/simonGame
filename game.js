// record game sequence pattern container
const gamePattern = [];

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
