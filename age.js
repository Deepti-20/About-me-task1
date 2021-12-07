const input=require("readline-sync")

let user=input.question("Is you older than 25 years ")
score=0
if(user=="yes"){
    console.log("right")
    score=score+1 
    console.log("the score is",score)
}
else{
    console.log("wrong")
}