var wins = 0;
var losses = 0;
var randomStarterNum;
var crytalTotal = 0;

// function to start game. Crystal container is empty. Generate target number to aim to. 
var resetAndStartGame = function (){
    $(".crystals-container").empty();
        var images = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GWejVvfN_e7kmTKFw5cWuF5RE_hAPpg4OuB_F40HTgPL7Ytq4g",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6ZRaTk0vamiHZqcS4BRZXYGrOC_WIFK3GCX8K85vqqTMdEs",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUAnTCzGg_-85hkV0rg1cdvd7Esl4_KxwuApyFTKhAwTzPyNVew", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPYR7Wdab7DD6Dc6z0WqOkeSqN380Gp5XfcVLroOroH_Pcc0t-Q"
        ];
        randomStarterNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomStarterNum);

// dynamically putting html on the page + values of each variable. 
    $("#random-Starter-Num").html("Target Number: " + randomStarterNum);
    $("#wins-container").html("Wins: " + wins);
    $("#losses-container").html("Losses: " + losses);
    $("#sumOfYourCrystals").html("Sum of Your Crystals: " + crytalTotal);

// generate random number for the crystals. 
    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);
// dynamically putting the containers for the crystals. 
        var crystals = $("<div>");
            crystals.attr({
            "class": "crystals",
            "crystal-randomNum": random,
            });
            crystals.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });

            $(".crystals-container").append(crystals);
    }
}

resetAndStartGame ();

$(document).on("click", ".crystals", function(){
    var addingCrystals = parseInt($(this).attr("crystal-randomNum"));

    crytalTotal += addingCrystals;

    $("#sumOfYourCrystals").html("Sum of Your Crystals: " + crytalTotal);

    if (crytalTotal > randomStarterNum){
        losses++;
        console.log("You Lost!");
        crytalTotal = 0;
        resetAndStartGame ();
    }
    else if (crytalTotal === randomStarterNum){
        wins++;
        console.log("You Win!");
        crytalTotal = 0;
        resetAndStartGame ();
    }

    console.log(crytalTotal);
});

//wins losses & total score need to start at 0 
//random number needs to generate from 19-120
//when user clicks one of the 4 crystals, a random number from 1 to 12 needs to generate for that crystal
