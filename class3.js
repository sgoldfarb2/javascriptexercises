//Javascript Anonymous Functions and Callbacks

//function myFunc(args) {
//stuff in myFunc
//return stuff
//}

//function is replaced with the return value once the function is completed

//self-invoking function
// (function () {
//   var x = 'Hello!';
// }) ();
//this function above is self-invoking, so you don't ever have to call it
//you have to add () around the function to indicate that it is a function expression
//why would you do this? this is for the background of JS, when you pull in modules, they may have variables with the same name, so this will keep those modules contained so the variables from multiple modules don't clash

//anonymous functions and callbacks:

//anonymous functions:
//function() {
//   return 0;
// }

//we can set a variable to an anonymous function and use that variable to call it
// var name = function() {
//   return 0;
// }
// name()

//callback functions
// var add = function (num1, num2) {
//   return num1 + num2;
// }

// var subtract = function (num1, num2) {
//   return num1 - num2;
// }

// var ourCalculator = function (num1, num2, operatorFunc) {
//   return operatorFunc(num1, num2);
// }
//in the above example, we are passing either add or subtract into our ourCalculator function



//arrays have built in functions that make use of callbacks

//forEach:
//var arr = [0, 1, 2, 3, 4, 5]
//arr.forEach(function(element){
//   console.log(element + "!") //this function can do whatever you want it to!
// })
//always returns undefined

//map
// var arr = [0, 1, 2, 3, 4, 5]
// var newArr = arr.map(function (element) {
//   return element + 2;
// })
// console.log(newArr)
//creates a new array

//filter
//var arr = [0, 1, 2, 3, 4, 5]
//var newArr = arr.filter(function(element) {
//   return element < 2;
// })
//console.log(newArr) //[0, 1]
//creates a new array
//only returns the items that return true to the new array
//your callback returns true or false
//normally used when you want to delete things from an array but you don't want to modify the original array, so you make a new one that filters out whatever you don't want


//some
//iterates over your array and returns true if at least one element in your array passes the condition
//your callback needs to return true or false
// var arr = [0, 1, 2, 3, 4, 5]
// var lessThanTwo = arr.some(function(element) {
//   return element < 2
// })
//console.log(lessThanTwo) //true


//var vs let vs const
//let has block scope only! yay!
//var isn't global scope, but is close!
