$(document).ready(function() {
    $("#start").on("click", function(){
        $("#content").empty();
        startQuiz();
    });
});

    var questions = [{
        question: "How many kingdoms are in Westeros?",
        options: ["Five", "Seven", "Nine", "Three"],
        answer: 1
    },{
        question: "Who is Joffrey Baratheon's father?",
        options: ["Tyrion Lannister", "Stannis Baratheon", "Jaime Lannister", "Robert Baratheon"],
        answer: 2
    },{
        question: "What is the bastard surname in Dorne?",
        options: ["Sand", "Snow", "Stone", "Dune"],
        answer: 0
    },{
        question: "What is the name of Arya Stark's sword?",
        options: ["Icicle", "Needle", "Nymeria", "Lion’s Bane"],
        answer: 1
    },{
        question: "What is NOT part of the Night's Watch vows?",
        options: ["Win No Glory", "Take No Wife", "Father No Children", "Kill No Innocent"],
        answer: 3
    },{
        question: "Where does the Red Wedding take place?",
        options: ["Riverrun", "The Red Keep", "The Twins", "The Eyrie"],
        answer: 2
    },{
        question: "Which of Daenerys Targaryen's three dragons are the largest?",
        options: ["Rhaegal", "Viserion", "Balerion", "Drogon"],
        answer: 3
    },{
        question: "How many eyes does the raven in Bran's dream have?",
        options: ["Four", "Three", "One", "Two"],
        answer: 1
    },{
        question: "What caused the bright green explosion of fire at King’s Landing?",
        options: ["Napalm", "Fireworks", "Wildfire", "Essence of Nightshade"],
        answer: 2
    },{
        question: "What is Sansa Stark's favorite treat?",
        options: ["Lemon Cakes", "Berry Tarts", "Lamprey Pie", "Tyroshi Pears"],
        answer: 0
    }];




    var timeCount = 100;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    function countdown(){
        timeCount--;
        $("#time-display").html(timeCount);
        if(timeCount <= 0){
            alert("Time's up!");
        }
    };

    function startQuiz(){
        timer = setInterval(countdown, 1000);
        $(".panel-body").prepend("<h4>Time Remaining: <span id='time-display'>100</span> Seconds</h4>"); //adds the timer to the top of the div

        for(var i = 0; i <questions.length; i++){
            $("#content").append("<h3>" +questions[i].question+ "</h3>"); //loops and appends each question from the array
            for(var j = 0; j < questions[i].options.length; j++){
                $("#content").append("<br><input type='radio' 'value='" +questions[i].options[j]+ "'> " +questions[i].options[j]);
            } //loops and appends each answer option with a radio button for selection based on the values in the array
        }
        $(".panel-body").append("<br><button id='end' class='btn'>Submit</button>");

    };


    //code that checks the value of the radio button input against the stored correct value would go here.

    //I wanted to store the correct answer value as the index number of the "options" property but I could not figure out how to assign this value to the radio buttons dynamically.

    //if the value selected matched the correct value, a point would be added to the correct variable.
    //if the value selected did not match the correct value, a point would be added to the incorrect variable.
    //if no value was selected, a point would be added to the unanswered variable.

    //I also considered making a selection required and found out how to do this by adding a required="required" attribute, but the instructions said to count unanswered questions at the end. 

    //Next, I would have a click event for the user hitting "Sumbit" smiliar to how they did with "Start," which would then display the results:

        //empty questions from content div
        //interject new html content to display score, append each as a separate line
        //append a button to restart the quiz

    //click event for restart button to run startQuiz();

    

 
