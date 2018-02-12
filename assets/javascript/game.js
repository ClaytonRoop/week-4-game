
$(document).ready(function () {

    var minNumber = 9;
    var maxNumber = 120;
    var buttonMin = 1;
    var buttonMax = 12;
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var newTotal = 0;
    var gameOver = true;

    var gemArray = [];

    var ruby = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(ruby);

    var emerald = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(emerald);

    var sapphire = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(emerald);

    var diamond = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(emerald);

    var randomNumber = generatorRandom(minNumber, maxNumber);



    function generatorRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(randomNumber);
    $(".randomscore").text(randomNumber);

    // End of Global Variables - creating reset/clearAll function

    function clearAll() {
        ruby = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log(ruby);

        emerald = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log(emerald);

        sapphire = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log(emerald);

        diamond = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log(emerald);

        randomNumber = generatorRandom(minNumber, maxNumber);

        $(".randomscore").text(randomNumber);

        playerScore = 0;
        $(".userscore").text(playerScore);

        $(".h2winloss").text("");

        gameOver = true;
    }
    
        // for (i = 1; i < 5; i++) {
    
    //     function crystalNumbers(min, max) {
    //         var pushedToArray = Math.floor(Math.random() * (max - min + 1) + min);
    //     }
    
    //     crystalNumbers();
    //     console.log([pushedToArray]);

    //     gemArray.push(pushedToArray);

    //     $(".userscore").text(gemArray);

    // }

    // console.log(gemArray);
    function clickInitiated(result) {
        if (result < randomNumber || gameOver === false) {
            return;
        } else if (result > randomNumber) {
            losses++
            $(".h2winloss").text("You Lost!")
            $(".winloss").text("You Lost Your Last Game!");
            $(".losses").text("Losses: " + losses);
            gameOver = false;
            // alert("You lose!");

            setTimeout(function () {
                clearAll();
            }, 1200);

           
        } else if (result == randomNumber) {
            wins++
            $(".h2winloss").text("You Win!")
            $(".winloss").text("You Won Your Last Game!");
            $(".wins").text("Wins: " + wins);
            gameOver = false;
            // alert("You win");
            
            setTimeout(function () {
                clearAll();
            }, 1200); 
        }
    }

    function clickbutton(gem) {
        if (gameOver !== false){ 
        playerScore += gem;
        $(".userscore").text(playerScore);
        clickInitiated(playerScore);
        }

    }

    
    $(".emeraldbutton").on("click", function () {
        clickbutton (emerald); 
    });

    $(".rubybutton").on("click", function () {
        clickbutton(ruby);
    });

    $(".diamondbutton").on("click", function () {
        clickbutton(diamond);
    });

    $(".sapphirebutton").on("click", function () {
        clickbutton(sapphire);
    });

});
