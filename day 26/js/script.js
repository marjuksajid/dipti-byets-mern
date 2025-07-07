// document.getElementById("main").innerHTML += "Nike American";
const main = document.getElementById("main");
main.innerHTML = "Nike American";

const pain = document.getElementsByClassName("pain")[0];

pain.innerText = "Yo, it's innerText";
document.getElementsByClassName("pain")[1].innerHTML = "<h1>Yo, it's innerHTML</h1>"

const rain = document.querySelector("#rain");
rain.textContent = "Murdabad nipat jak";

const h1 = document.querySelector("h1");
h1.textContent = "DIPTI BYETS";

const chain = document.getElementsByClassName("chain");
chain.textContent = "Apurba is a CSE stu.";

// console.log(city)

const city = document.querySelector("#city");

city.children[0].textContent = "Dhaka";
city.children[1].textContent = "Chittagong";
city.children[2].textContent = "Raj";
city.children[3].textContent = "Sylhet";
city.children[4].textContent = "Khulna";

console.log(city.parentElement);
console.log(city.parentNode);

console.log(city.nextElementSibling);
console.log(city.nextSibling);

console.log(city.previousElementSibling);
console.log(city.previousSibling);

city.nextElementSibling.textContent = "This is the next sibling of citylist";

city.previousElementSibling.textContent = "This is the previous sibling of citylist";