let student = {
    name: "Alice",
    age: 23,
    major: "information technology",
    GPA: 3.78
}

let student2 = {}
console.log(student2);
student2.name = "Bom"
student2['age'] = 22
console.log(student2);
console.log(student2.name);
console.log(student2['age']);

// let name = student.name
// let age = student.age
// let major = student.major
// let gpa = student.GPA
let { name, age, major, GPA } = student
console.log(name, age, major, GPA);

// Object Assign

let info = {
    admission: "20/06/2020",
    gradute: "09/03/2022"
}

Object.assign(student, info)
console.log(student);

// List all keys in objects
console.log(Object.keys(student))

// List all value
console.log(Object.values(student))

///// Objects in Arrays
//// Objects contains student info

let studentInfo = [
    { // index 1
        name: "Alice",
        age: 23,
        major: "information technology",
        GPA: 3.78
    },
    { // index 2

        name: "Sara",
        age: 25,
        major: "Food Sciences",
        GPA: 3.50
    },
    { // index 3

        name: "Gabriel",
        age: 19,
        major: "English",
        GPA: 2.4
    },

]

for (let i = 0; i < studentInfo.length; i++) { // can using index or i, any dummy

    console.log(studentInfo[i]);

    if (studentInfo[i].GPA > 2) {
        console.log("Pass");
    } else {
        console.log("Not pass");
    }
}




