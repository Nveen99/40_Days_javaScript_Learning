
    //1. Odd or Even?

    //taken a number
    let number = 7;

    if (number % 2 === 0) {
        console.log("it is even number");

    } else {
        console.log("it is odd number")
    }

    //2. Do you have a Driving License?
    /*Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
        Manage age as a variable.
        Check if the age is elligible for a driving license and print it on the console accordingly. 
    */

    let age = 20;
    if (age >= 18) {
        console.log("you are eligible to get a driving license");
    } else {
        console.log("you are not eligible to get a driving license")
    }

    /*
    3. Calculate CTC with a Bonus
    Let's calculate how much you earn from your office.

    You get 12,300 rupees as your monthly salary.
    You get a 20% bonus on your annual salary.
    How much money do you make per annum as a CTC?


    */

    let monthlySalary = 12300;
    let annualSalary =monthlySalary*12;
    let bonus=annualSalary*0.20;
    let ctc= annualSalary+bonus;
    console.log('Monthly salary:'+ monthlySalary);
    console.log('annual bonus :'+ bonus);
    console.log('Annual CTC:'+ ctc);


    /*
    4. Write a program for the Traffic Light Simulation.
    Red Light... Green Light... Let's Play!

    Create a color variable.
    Based on the color variable's value print in the console if a traveller needs to STOP or GO.
    The Red color is for STOP and the Green color is for GO.

    */

    let color ="Red";

    if(color==="Red"){
        console.log('Red signal :STOP');
    }else if(color ==="Green"){
    console.log('Green signal :GO');
    }else{
        console.log('invalid');
    }


    /*
    5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
    
    */


 // Units consumed per day
let units = 5;

// Cost per unit
let costPerUnit = 150;

// Days and months
let daysInMonth = 30;
let monthsInYear = 12;

// Monthly bill
let monthlyBill = units * costPerUnit * daysInMonth;

// Annual bill without discount
let annualBill = monthlyBill * monthsInYear;

// 20% discount
let discount = annualBill * 0.20;

// Annual bill after discount
let annualBillAfterDiscount = annualBill - discount;

// Print results
console.log("Monthly Electricity Bill: ₹" + monthlyBill);
console.log("Annual Electricity Bill (before discount): ₹" + annualBill);
console.log("Annual Electricity Bill (after 20% discount): ₹" + annualBillAfterDiscount);


/*
6. Leap Year Checker
Is 2025 a Leap Year?
 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

*/

// Take year as input
let year = 2022;

// Leap year check using ternary operator
let result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    ? "Leap Year"
    : "Not a Leap Year";

// Print result
console.log(year + " is " + result);

/*
7. Max of Three Numbers
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
*/

let p = 15;
let q = 42;
let r = 27;

let max;

if (p >= q && p >= r) {
    max = p;
} else if (q >= p && q >= r) {
    max = q;
} else {
    max = r;
}

console.log("The maximum number is:", max);

/*
8. Bitwise Doubling
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.

*/

// Create a variable
let count = 5;

// Use bitwise left shift to double the number
let doubled = count << 1;

// Print the result
console.log("Original value:", count);
console.log("Doubled value:", doubled);
