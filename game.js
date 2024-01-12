// record game sequence pattern container
const gamePattern = [];

// storage the user clicks
const userClickedPattern = [];

// storage level;
let level = 0;

// game start handler
let gameStart = false;

// keypress handler;
let keypress = [];

// randomly output one of four colours
const nextSequence = function () {
  if (level > 0) {
    $("h1").text("Level " + level);
  };
  
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

  // add delay start
  setTimeout(randomColourHandler, 1000);

};

// handler of user chosen colour
const userChosenColour = function () {
  $("div[type='button']").on("click", function () {
    let clickedButton = $(this).attr("id");
    userClickedPattern.push(clickedButton);
  });
};

// user click button
const playSound = function () {
  // audio played
  $("div[type='button']").on("click", function () {
    const audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
    audio.play();
    // animation effect
    $(this).addClass("pressed");

    // remove animation effect after 100ms
    const currentButton = $(this);
    setTimeout(function () {
      $(currentButton).removeClass("pressed")
    }, 100);
  });
};

// press any key to start the game
const keyPressed = $(document).on("keypress", function(event) {
  // call to start the game
  if(event.which !== undefined) {
    keypress.push(event.which);

    gameStart = true;
    level = 1;
  }

  if (keypress.length === 1) {
    nextSequence();
}
});