const arafat = {
    fullName: "Arafat Rahman",
    title: "Mr",
    city: "Chandpur",
    status: "Single",
    institute: "Daffodil"
}

for (const key in arafat) {
    console.log(key, ":", arafat[key]) // arafat.key won't be okay; there is no "key" key
}

const keys = Object.values(arafat)

for (const key of keys){
    console.log(keys, ":", arafat[key]);
}