$(document).ready(function () {
    // Questions
    var questions = [
        {
            quest: "What's Mr. Burns first name?",
            choice: ["Charles", "Monty", "Montgomery", "Bruce"],
            yep: "0",
        },
        {
            quest: "What does the 'J' in Homer J. Simpson stand for?",
            choice: ["Jimpson", "Jay", "Jim", "James"],
            yep: "1",
        },
        {
            quest: "Who is Mr. Burns' assistant?",
            choice: ["Jeeves", "Ralph", "Smithers", "Farquad"],
            yep: "2",
        },
        {
            quest: "What is Springfield's Baseball Team?",
            choice: ["The Isotopes", "The Fallouts", "The Beavers", "The Burgers"],
            yep: "0",
        },
        {
            quest: "Homer's Snow Shoveling Business was called",
            choice: ["Snow Shovel Hustle", "Anatawa Shovel-desu", "Busy Bunny Plowing and Pipelaying", "Mr. Plow"],
            yep: "3",
        },
        {
            quest: "Apu and Lisa are both....",
            choice: ["Vegetarians", "Hindu", "Bartman", "Losers"],
            yep: "0",
        },
        {
            quest: "Homer has a japanese Logo that looks just like him because",
            choice: ["He's big in Japan", "There is a Japanese Simpsons CEO", "It's a fish/bulb mashup", "Random Happenstance"],
            yep: "2",
        },
    ];
    //global variables i think i will probably need 
    var correct = 0;
    var incorrect = 0;
    var timer = 20;
    var intId;
    var spentQuest = [];
    var correctHorse = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/b3_lVSrPB6w?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`);
    var tooLong = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/yV727_YGAkQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`);
    var nopeVid = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/wX1x7pfH8fw?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`);
    var thatsAll = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/6Ghtv1nBcHE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`)
    var question;
    var startBtn = $(`<a class="btn btn-primary btn-lg startBtn" href="#" role="button">`)
    startBtn.text("Start")
    var resetBtn = $(`<a class="btn btn-primary btn-lg resetBtn" href="#" role="button">`)
    resetBtn.text("Again! Again!")
    var nextBtn = $(`<a class="btn btn-primary btn-lg" id="nextBtn" href="#" role="button">`)
    nextBtn.text("Next!")

    //function to populate random timed question 
    function ask() {
        //clear DOM and reset Timer
        timer = 20
        $("#quest").empty();
        $("#answers").empty();
        $("#timer").empty();
        //pick question homie
        var randomNum = Math.floor(Math.random() * questions.length)
        var question = questions[randomNum]
        //push question to h1 w/ id quest
        $("#quest").text(question.quest)
        //push btn with class "btn btn-primary btn-lg answBtn" (for loop)
        for (i = 0; i <= 3; i++) {
            var answBtn = $(`<a class="btn btn-primary btn-lg answBtn" href="#" role="button">`);
            answBtn.val(i);
            answBtn.text(question.choice[i]);
            $("#answers").append(answBtn);
            console.log(answBtn)
        }
        questions.splice(randomNum, 1);
        spentQuest.push(question);
        console.log(questions);
        console.log(spentQuest)
        //start timer
        startTimer();

        //if correct show image and log and move question into spentQuest
        $("body").unbind().on("click", ".answBtn", function () {
            if (this.value === question.yep) {
                $("#quest").empty();
                $("#answers").empty();
                $("#timer").empty();
                stopTimer(); //stops timer lol (keeps the 0 time if from firing)
                $("#quest").html("yep!!!" + "<br>")
                $("#quest").append(correctHorse);
                correct = correct + 1;
                $("#timer").text("Yeps: " + correct + " Nopes: " + incorrect);
                $("#answers").append(nextBtn);
                $("#answers").unbind().on("click", "#nextBtn", function (event) {
                    event.stopPropagation(); //keeps ask from firing before video loads
                    ask();
                });
            }
            else {
                $("#quest").empty();
                $("#answers").empty();
                $("#timer").empty();
                stopTimer(); //stops timer lol (keeps the 0 time if from firing)
                $("#quest").html("nope!!!" + "<br>")
                $("#quest").append(nopeVid);
                incorrect = incorrect + 1;
                $("#timer").text("Yeps: " + correct + " Nopes: " + incorrect);
                $("#answers").append(nextBtn);
                $("#answers").unbind().on("click", "#nextBtn", function (event) {
                    event.stopPropagation(); //keeps ask from firing before video loads
                    ask();
                });
            }
        });
    if (questions.length===0){
        stopTimer();
        $("#quest").empty();
        $("#answers").empty();
        $("#timer").empty();
        $("#quest").html("That's All Folks!" + "<br>");
        $("#quest").append(thatsAll);
        $("#timer").text("Your final Score is Yeps: " + correct + " Nopes: " + incorrect);
        for (i=6; i>=0; i--){
            var thisQuest = spentQuest[i]
            spentQuest.splice(i, 1);
            questions.push(thisQuest);
            console.log(spentQuest);
            console.log(questions)
        }
        $("#answers").append(resetBtn);
        $("#answers").unbind().on("click", ".resetBtn", function (event) {
            event.stopPropagation(); //keeps ask from firing before video loads
            ask();
        });

    }
    }

    $("body").unbind().on("click", ".startBtn", function () {
        ask();
    })
    //function for timer
    function startTimer() {
        clearInterval(intId);
        intId = setInterval(countdown, 1000)
    }

    function countdown() {
        timer--;
        $("#timer").text("Time Left: " + timer)
        if (timer === 0) {
            stopTimer();
            incorrect++;
            $("#quest").empty();
            $("#answers").empty();
            $("#quest").html("too long!!!" + "<br>")
            $("#quest").append(tooLong);
            $("#timer").text("Yeps: " + correct + " Nopes: " + incorrect);
            $("#answers").append(nextBtn);
            $("#answers").unbind().on("click", "#nextBtn", function (event) {
                event.stopPropagation(); //keeps ask from firing before video loads
                ask();})
            //timeout image
            //next ask btn
        }


    }

    function stopTimer() {
        clearInterval(intId)
    }
});
