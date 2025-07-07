const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
// console.log(chars[8]);
// Expected output: "k"
console.log(chars);

const strCopy = str.split();
// type clg and press tab; for console log
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
