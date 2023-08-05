/*const dog1 = {
    name: "Lukas",
    color: ["black", "wihte"],
    size: "small",
    age: 4,
};
object literal notation
object constructor
const dog2 = new Dog("Lukas", ["black", "white"], "small", 4);
console.log("Practice");
console.log("Practice");*/
console.log("Practice");

//object literal 
let student = {
    name: "Eduardo", 
    age: 22,
    grades: [10,9,8,7],
    address: {
        country: "United States",
        state: "California",
        city: "San Francisico",
    }
}
//create a new object literal from yourself and cosole log it

console.log(student);

let student2 = {
    name: "Tyler",
    age: 28,
    grades: [9,8,7,7],
    address: {
        country: "United States",
        state: "North Carolina",
        City: "Raleigh",
    }
}
console.log(student2);

document.write(`
<div class="student">
<p>Name: ${student.name}</p>
<p>Age: ${student.age}</p>
<p>Country: ${student.address.country}</p>`);

document.write(`
<div class="student">
<p>Name: ${student2.name}</p>
<p>Age: ${student2.age}</p>
<p>Country: ${student2.address.country}</p>`);
