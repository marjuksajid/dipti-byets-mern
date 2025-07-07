const cities = ["Choku", "Moku"]


const cityBank = (c, i) => {
    console.log(i + " = " + c)
}

// cities.forEach(cityBank)

const data = cities.map(cityBank)
console.log(data)