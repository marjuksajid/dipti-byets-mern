// var myMsg = "Hello, World!";
// console.log(myMsg);
// console.alert("OOo");
// var $_myMsg123 = "Hello, World!";
// var $_myMsg123 = "Hello, Universe!";
// let $_myMsg123 = "Hello, World!";
// $_myMsg123 = "Hello, Universe!";
// console.log($_myMsg123);

const studentName = "Joen Doe";

// studentName = "Kamla Haris";
console.log(studentName);
var a = 4;
const num1 = 10;
const num2 = "10";
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 > num2);

let userInput;
console.log(userInput ?? "Default Value");

const n = 123;
console.log(n > 100 ? "ha ha" : "Ho ho");

const stdName = "Arafat";
console.log(`${stdName} is a student.`)
console.log(stdName, "is a student.")
console.log(stdName + " is a student.")

const age = 20;
if (age < 0) {
    console.log("Not born yet");
} else if (age <= 18) {
    console.log("Child");
} else if (age <= 25) {
    console.log("Young");
} else if (age <= 35) {
    console.log("Earner");
} else {
    console.log("Old");
}

const day = "Sunday";
switch(day){
    case "Monday":
        console.log("Today is Monday.");
        break;
    default:
        console.log("Invalid");
}

const result = 82;
switch(true){
    case result > 80:
        console.log("A+");
        break;
    default:
        console.log("damn care!");
}