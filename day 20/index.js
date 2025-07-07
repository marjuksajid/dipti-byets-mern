// Define
function myFunction() {
    console.log("Hello, World!");
}
// Call
myFunction();

// return
function func2() {
    return "Other message";
}

// No output
func2();

console.log(func2());

// define with parameters
function func3(name = "World") {
    return "Hello, " + name + "!";
}

console.log(func3("Alice"));
console.log(func3("Bob"));
console.log(func3());

const func4 = function () {
    return "Hello, anonymous set to func4!";
}
console.log(func4());

const func5 = () => {
    return "Hello, world!";
}
console.log(func5());

const func6 = name => name;
console.log(func6("Alice"));

// hoisting
console.log(func7());
function func7() {
    return "Fun, Hoisting!";
}

// recursion
const fact = n => {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5));
// 0 to 9 recursively
const pu = n => {
    if (n > 9) {
        return;
    }
    console.log(n);
    return pu(n + 1);
}
pu(0);

// callback

const greet = (name, callback) => {
    console.log("Callback, " + name + "!");
    callback();
}

const farewell = () => {
    console.log("Goodbye, callback!");
}

greet("Alice", farewell);
greet("Bob", () => {
    console.log("See ya!");
});