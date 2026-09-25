let name = "Rhiza Mae Dacutanan"; 
let age = 19;
let course = "BSIT";

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];
let grades = [85, 90, 75];


if (age > 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}

if (course === "BSIT") {
    console.log("Course is Information Technology.");
} else {
    console.log("Course is not Information Technology.");
}

if (grades[0] >= 80) {
    console.log("First grade is passing.");
} else {
    console.log("First grade is failing.");
}

// Loops (3)
for (let i = 0; i < numbers.length; i++) {
    console.log("Number: " + numbers[i]);
}

let j = 0;
while (j < fruits.length) {
    console.log("Fruit: " + fruits[j]);
    j++;
}

for (let grade of grades) {
    console.log(`Grade: ${grade}`);
}
