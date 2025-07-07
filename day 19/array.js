const stus = ["Maruf", "Rahimul"];
// console.log(stus[0]);

stus.push("Siyam", "Sajid");

for (let i = 0; i < stus.length; i++) {
    console.log(stus[i]);
}

stus.pop();
console.log("After pop:");
for (let i = 0; i < stus.length; i++) {
    console.log(stus[i]);
}
console.log("After unshift:");
stus.unshift("Nasir");
for (let i = 0; i < stus.length; i++) {
    console.log(stus[i]);
}