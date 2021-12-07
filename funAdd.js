function addition(num1,num2){
    add=num1+num2
    return add
}
const input=require("readline-sync")
var num1=input.questionInt(" enter any number.. ")
var num2=input.questionInt(" enter any number..")
console.log(addition(num1,num2))