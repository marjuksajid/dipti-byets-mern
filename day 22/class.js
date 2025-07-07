class myClass {
    // properties
    className = "BYETS MERN Batch-2"
    stus = ["Alice", "Bob", "Charlie"]
    organization = () => {
        return "DIPTI"
    }

    bestS = (std = 'Siyam') => {
        return std + ", " + this.stus[2] + ", and " + this.stus[1] + " are besties!"
    }
    constructor() {
        console.log("Class created successfully.")
    }
}

const obj = new myClass
console.log(obj.className)
console.log(obj.organization())

console.log(obj.bestS("Sagar"))
console.log(obj.bestS("Arafat"))

let x = 1.00
console.log(x.toFixed(2))