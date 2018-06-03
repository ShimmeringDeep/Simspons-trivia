$(document).ready(function () {
    // Questions
    var questions = [
        {
            quest: "What's Mr. Burns first name?",
            choice: ["Charles", "Monty", "Montgomery", "Bruce"],
            yep: 0,
        },
        {
            quest: "What does the 'J' in Homer J. Simpson stand for?",
            choice: ["Jimpson", "Jay", "Jim", "James"],
            yep: 1,
        },
        {
            quest: "Who is Mr. Burns' assistant?",
            choice: ["Jeeves", "Ralph", "Smithers", "Farquad"],
            yep: 2,
        },
        {
            quest: "What is Springfield's Baseball Team?",
            choice: ["The Isotopes", "The Fallouts", "The Beavers", "The Burgers"],
            yep: 0,
        },
        {
            quest: "Homer's Snow Shoveling Business was called",
            choice: ["Snow Shovel Hustle", "Anatawa Shovel-desu", "Busy Bunny Plowing and Pipelaying", "Mr. Plow"],
            yep: 3,
        },
        {
            quest: "Apu and Lisa are both....",
            choice: ["Vegetarians", "Hindu", "Bartman", "Losers"],
            yep: 0,
        },
        {
            quest: "Homer has a japanese Logo that looks just like him because",
            choice: ["He's big in Japan", "There is a Japanese Simpsons CEO", "It's a fish/bulb mashup", "Random Happenstance"],
            yep: 2,
        },
    ];
    //global variables i think i will probably need (sbuject to change lmao)
    var correct = 0;
    var incorrect = 0;
    var choiceVal;
    var run = false;
    var timer = 20;
    var intId;
    var spentQuest = [];
    // var startBtn = something //to be filled out soon
    // var resetBtn = same
    // var nextBtn = blahHTMLjquerynonsense

    //function to populate random timed question 
    function ask() {
        //clear DOM and reset Timer
        timer = 20
        $("#quest").empty();
        $("#answers").empty();
        $("#timer").empty();
        //pick question homie
        var question = questions[Math.floor(Math.random() * questions.length)]
        //push question to h1 w/ id quest
        $("#quest").text(question.quest)
        //push btn with class "btn btn-primary btn-lg answBtn" (for loop)
        for (i = 0; i <= 3; i++){
            var answBtn = $(`<a class="btn btn-primary btn-lg answBtn" href="#" role="button">`);
            answBtn.val(i);
            answBtn.text(question.choice[i]);
            $("#answers").append(answBtn);
        }

        //start timer
        startTimer();

        //if correct show image and log and move question into spentQuest
        // source.splice(i, 1);
        // target.push(element);

        //if incorrect show image and log and move question into spentQuest

        
    }
    ask ()
    
    //reset function 

        //repopulate questions with spentQuest

        //Displays Play again screen

    //runs if questions[] is empty

        //shows score

        //shows button that runs reset function


    //function for timer
    function startTimer() {
        clearInterval(intId);
        intId = setInterval(countdown, 1000)
    }

    function countdown(){
        timer--;
        $("#timer").text("Time Left: " + timer)
        if (timer === 0){
            stopTimer();
            incorrect++;
            $("#quest").empty();
            $("#answers").empty();
            //timeout image
            //next ask btn
        }
        

        //if too long show image and log and move question into spentQuest
    }

    function stopTimer() {
        clearInterval(intId)
    }
});
