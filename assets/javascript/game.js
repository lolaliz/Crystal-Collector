$(document).ready(function() {
    //Target number user is trying to match, must be between 19 & 120
    //new random number needs to be generated each time user wins or loses 
    var targetNumber = Math.floor(Math.random() * 120) + 19;

    //user starts at 0 , this is the 'total score', it must be set to 0 each time user wins or loses
    //if this counter matches target number, the user wins
    //if this counter goes over target number, the user loses
    var counter = 0;

    //value options for each crystal, must be between 1 & 12
    //each crystal will get a new value at the start of each game
    var crystalOneNumber = Math.floor(Math.random() * 12) +1; //do this for each crystal
    console.log("c1 value = " + crystalOneNumber)
    var crystalTwoNumber = Math.floor(Math.random() * 12) +1;
    console.log("c2 value = " + crystalTwoNumber)
    var crystalThreeNumber = Math.floor(Math.random() * 12) +1;
    console.log("c3 value = " + crystalThreeNumber)
    var crystalFourNumber = Math.floor(Math.random() * 12) +1;
    console.log("c4 value = " + crystalFourNumber)
    //tracks wins & losses
    var wins = 0;
    var losses = 0;


    $("#targetNumber").text(targetNumber);
    $("#scoreboard").text(counter);
    //$("#wins").text(wins);
    //$("#losses").text(losses);
    
    //this variable sets the class for each crystal button as the class for each crystal image
        var crystalOneButton = $(".crystalOne");//do this four times
        var crystalTwoButton = $(".crystalTwo");
        var crystalThreeButton = $(".crystalThree");
        var crystalFourButton = $(".crystalFour");

        crystalOneButton.val(crystalOneNumber)//do this four times
        crystalTwoButton.val(crystalTwoNumber)
        crystalThreeButton.val(crystalThreeNumber)
        crystalFourButton.val(crystalFourNumber)
    
    
//add crystal value to random number each time a crystal is clicked
    $(".crystalOne").on("click", function() {
        console.log($(this).val());
        counter += crystalOneNumber;
        $("#scoreboard").text(counter);
        WinsLosses();
        
        
    
    })
    
    $(".crystalTwo").on("click", function() {
        console.log($(this).val());
        counter += crystalTwoNumber;
        $("#scoreboard").text(counter);
        WinsLosses();
        

    })

    $(".crystalThree").on("click", function() {
        console.log($(this).val());
        counter += crystalThreeNumber;
        $("#scoreboard").text(counter);
        WinsLosses();
    })

    $(".crystalFour").on("click", function() {
        console.log($(this).val());
        counter += crystalFourNumber;
        $("#scoreboard").text(counter);
       WinsLosses();
       
    })

       function WinsLosses() {
          if (counter === targetNumber) {
              $("#wins").text(wins);
              resetNumbers();
              $("#scoreboard").empty(counter);
              wins++

          }
      
          else if (counter >= targetNumber) {
              $("#scoreboard").empty(counter);
              resetNumbers();
              losses++
              $("#losses").text(losses);
          }

          
        }

        function resetNumbers(){
           
            
            var targetNumber = Math.floor(Math.random() * 120) + 19;
            
            var crystalOneNumber = Math.floor(Math.random() * 12) +1; 
            console.log("c1 value = " + crystalOneNumber)
            var crystalTwoNumber = Math.floor(Math.random() * 12) +1;
            console.log("c2 value = " + crystalTwoNumber)
            var crystalThreeNumber = Math.floor(Math.random() * 12) +1;
            console.log("c3 value = " + crystalThreeNumber)
            var crystalFourNumber = Math.floor(Math.random() * 12) +1;
            console.log("c4 value = " + crystalFourNumber)
    
   
            var counter = 0;

             $("#targetNumber").text(targetNumber);
             $("#scoreboard").text(counter);
   
            
           
    
              
            }
    
    

});