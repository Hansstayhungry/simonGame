// record game sequence pattern container
const gamePattern = [];

// randomly output one of four colours
const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4)
  const buttonColours = ["red", "blue", "green", "yellow"];
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
};

