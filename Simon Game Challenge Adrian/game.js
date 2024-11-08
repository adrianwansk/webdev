
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

function nextSequence() {
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  /* var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play(); */
  // 3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
}


// 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// --> So if the Green button was clicked, userChosenColour will equal its id which is "green".

$(".btn").click(function(){
    if(started ===true) {
    var userChosenColour = this.id;

// 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    }
})
// At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.



// 1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

// 2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    animatePress(name);
}

// 4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){$("#"+currentColour).removeClass("pressed")}, 100);
    }

 
// This starts the game
$("*").keydown(function(){
    if(started === false){
    started = true;

        
    
    $("h1").text("Level " + level);
    nextSequence();
    }

    else if(started === true) {
            console.log("game has already started");
        };
})

var started = false;
var level = 0;

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {    
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){nextSequence()}, 1000);
        }
    }
    else {
        var audioGameOver = new Audio("./sounds/wrong.mp3");
        audioGameOver.play();
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")}, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}












//--------------------------------------------------------------------------------------------
/* for (var i = 0; i < buttonColours.length; i++) {
$("#"+buttonColours[i]).click(function() {
    
    var clicked = this.id;
    
    switch (clicked) {
        case "red":
            $("#red").fadeOut(50);
            $("#red").fadeIn(50);
            var redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break;
    
        case "blue":
            $("#blue").fadeOut(50);
            $("#blue").fadeIn(50);
            var blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();
            break;

        case "green":
            $("#green").fadeOut(50);
            $("#green").fadeIn(50);
            var greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break;

        case "yellow":
            $("#yellow").fadeOut(50);
            $("#yellow").fadeIn(50);
            var yellowSound = new Audio("./sounds/yellow.mp3");
            yellowSound.play();
            break;

        default:    
            break;
    };
    
}
)
} */


// non-loop version (is there a reason why I shouldn't use this?) - I didnt' realize we are animating the simon says part and not the click part

/* $("#"+randomChosenColour).click(function() {
    $("#"+randomChosenColour).fadeOut(50);
    $("#"+randomChosenColour).fadeIn(50);
}
)

 */