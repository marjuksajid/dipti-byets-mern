const myJson = {
    className: "MyClass",
    batchName: "Batch 2",
    totalStudents: 24,
    isClassActive: true,
    disabledStudents: null,
    studentNames: ["Arafat", "Sagar", "Apurba"],
    classOthersInfos: {
        // className: this.className,
        // batchName: this.batchName,
        // totalStudents: this.totalStudents,
        // isClassActive: this.isClassActive,
        // isClassActive: this.isClassActive,
        // isClassActive: this.isClassActive,
        firstBoy: "Sajid",
        classRoom: "Room 509",
    },
    apurbaFunc: function() {
        return this.studentNames[2] + " is a student of " + this.className;
    }
}

console.log(myJson.className)
console.log(myJson['batchName'])
console.log(myJson['totalStudents'])
console.log(myJson['isClassActive'])
console.log(myJson.disabledStudents)
console.log(myJson.studentNames[0])
console.log(myJson.classOthersInfos.classRoom)
console.log(myJson.classOthersInfos.apurbaFunc)

const jsonString = JSON.stringify(myJson);
console.log(jsonString);

const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);