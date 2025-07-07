let lines = ["1", "0", "2", "0", "0", "100"]
const yo = "Yo yo yo!"
const no = "No no no!"
// Beecrowd problem solved
lines.forEach(n => {
    if (parseInt(n) === 0) {
        console.log(no)
    } else if (parseInt(n) > 0) {
        console.log(yo)
    }
})
