let student = {
    //key: value
    name: 'Alice',
    age: 23,
    major: 'Information Technology',
    GPA: 3.78,
}

let student2 = {}
student2.name = 'Bom'
student2['age'] = 22

console.log(student2)
console.log(student2.name)
console.log(student2['age'])

// Normal method to set value
// let name = student.name
// let age = student.age
// let major = student.major
// let gpa = student.GPA

//Destructering method faster
// let { name, age, major, GPA } = student; // must be matchs with previous information
// console.log(name, age, major, GPA);

Object.assign(student, { admission: '20/06/2020' }) // Add objects
console.log(student)

let info = {
    admission: '20/06/2020',
    graduate: '09/03/2020'
}

Object.assign(student, info)

console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));

//Usually found in work keep Objects in Arrays Index

let studentInfo = [
    {
        //key: value
        name: 'Alice',
        age: 23,
        major: 'Information Technology',
        GPA: 3.78,
    }, //Index 0

    {
        //key: value
        name: 'Bom',
        age: 23,
        major: 'Engineering',
        GPA: 3.78,
    }, //Index 1

    {
        //key: value
        name: 'Alam',
        age: 23,
        major: 'Science',
        GPA: 1.99,
    } //Index 2

]

for (let i = 0; i < studentInfo.length; i++) {
    //const element = array[index];
    console.log(studentInfo[i]);

    if (studentInfo[i].GPA > 2) {
        console.log('Pass');
    } else {
        console.log('Not PASS');
    }

}