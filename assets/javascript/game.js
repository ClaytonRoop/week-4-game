
$(document).ready(function () {

    var minNumber = 9;
    var maxNumber = 120;
    var buttonMin = 1;
    var buttonMax = 12;
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var newTotal = 0;

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
        if (result < randomNumber) {
            return;
        } else if (result > randomNumber) {
            losses++
            $(".h2winloss").text("You Lost!")
            $(".winloss").text("You Lost Your Last Game!");
            $(".losses").text("Losses: " + losses);
            // alert("You lose!");

            setTimeout(function () {
                clearAll();
            }, 1200);

           
        } else if (result == randomNumber) {
            wins++
            $(".h2winloss").text("You Win!")
            $(".winloss").text("You Won Your Last Game!");
            $(".wins").text("Wins: " + wins);
            // alert("You win");
            
            setTimeout(function () {
                clearAll();
                
            }, 1200); 
        }
    }

    $(".emeraldbutton").on("click", function () {
         playerScore += emerald;
        $(".userscore").text(playerScore);
        clickInitiated(playerScore);
       
    });

    $(".rubybutton").on("click", function () {
        playerScore += ruby;
        $(".userscore").text(playerScore);
        clickInitiated(playerScore);
       

    });

    $(".diamondbutton").on("click", function () {
        playerScore += diamond;
        $(".userscore").text(playerScore);
        clickInitiated(playerScore);
        

    });

    $(".sapphirebutton").on("click", function () {
        playerScore += sapphire;
        $(".userscore").text(playerScore);
        clickInitiated(playerScore);
        
    });

});
