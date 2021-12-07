var readlineSync = require("readline-sync");
var score=0
var userName = readlineSync.question(" what's your name ? ")
console.log("Welcome",userName," to Do You Know Deepti? ")

// var score=0
function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer=="yes"){
        console.log("right !");
        score=score+1;
    } else {
        console.log("wrong !")
    }
    console.log("current score :",score)
    console.log("--------------")
}
var questions = [{
    question: "Where do I live",
    answer: "Banglore"
    },
    {  
    question: "My favorite superhero would be ?",
    answer: "My Father"
    },
    {
        question:"Where do I study ?",
        answer: "Navgurukul"
    }];

for (var i=0; i<1;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.questions,currentQuestion.answer)
}

for (let value of questions){
    console.log(value.question)
    console.log(value.answer)
}
// console.log(questions[0].question)
console.log("wow! your score is: ",score)