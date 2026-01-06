/*Task 1: Declare variable a person name, age, isStudent Status, and Favorite Programing Language
   Task 2: Print the value to the console.
Task 3:Try reassigning values to let and const and obserev errors
task 4: create an object and an array, assign them to new variables, modify and obser changes
 */

//Task 1: Declare variable a person name, age, isStudent Status, and Favorite Programing Language
let personName ='Naveen Thumoji';
let age=32;
let isStudent=true;
let favPrograming='Salesforce';

//   Task 2: Print the value to the console.
console.log('personName:',personName);
console.log('person age:',age);
console.log('person Student:',isStudent);
console.log('person fav Program:',favPrograming);

//Task 3:Try reassigning values to let and const and obserev errors

/* let age=32;
console.log('person age:',age); // Error: Block-scoped variable 'age'
*/


// task 4: create an object and an array, assign them to new variables, modify and obser changes
let person = {
    name: "Naveen",
    age: 25
};

// Assign to a new variable (copying reference)
let newPerson = person;

// Modify newPerson
newPerson.age = 30;

console.log("Original Person:", person);
console.log("New Person:", newPerson);


// Original array
let colors = ["red", "blue", "green"];
console.log("Original Colors:", colors);

// Assign to a new variable (copying reference)
let newColors = colors;
// Modify newColors
newColors.push("yellow");


console.log("New Colors:", newColors);
