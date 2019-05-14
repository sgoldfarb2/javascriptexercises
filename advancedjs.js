//advanced objects
//so far we've been creating objects literally like
//var course ={
//title: 'Digital Crafts'
//}
//var course = {}
//course.title = 'Digital Crafts'

//object constructor notation
//var course = new Object()
//the new keyword creates a blank object and then you can add properties and methods on the object

//example:
//var myString = new String()
//myString.length

//regular expressions
//will go over more in jQuery, but can look at what you are looking for (like knowing an email is in the correct form or looking for phone numbers, etc)

//Object Constructor Methods
//objectName.propertyName

// Object constructor function example
// function Course(title, instructor, level) {
//   this.title = title;
//   this.instructor = instructor;
//   this.level = level;
// }

// var course1 = new Course('DC', 'Veronica', 2)
// console.log(course1)

//for in loops
//looping through an object
// for (variable in object){

// }

// for (attribute in course1) {
// console.log(attribute)
//   console.log(course1[attribute])
// }



//Object Prototypes
//see notes from fullstack foundations class!
// var X = function (j) {
//   this.j = j
// }

// X.prototype.getJ = function () {
//   return this.j
// }

// var x1 = new X(2)
// console.log(Object.getPrototypeOf(x1))



//Classes
//see notes from fullstack foundations class!

