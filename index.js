
import { Student } from "./student";

// Default -> import ... from '';
// Named -> import { ... } from '';
import Teacher, { promote } from "./teacher";

const teacher = new Teacher("Roni", "20th");
teacher.learn();

// ==============
// Modules
// ==============
const student = new Student("Roni", "20th");
student.learn();

// =========
// Classes
// =========

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const personObj = new Person("Roni");
// personObj.walk();

// ==============
// Inheritance
// ==============
// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log("Teach");
//   }
// }
// const teacher = new Teacher("Roni", "BSC");
// teacher.teach();


// ====================
// Let vs Var vs Const
// ====================

// Var -> function
function sayHello() {
  for (var i; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();

// let -> block
function sayHi() {
  for (let i; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); // it will cause error
}

sayHi();

// const -> block
const x = 1;
// x = 2; // it will cause error

// ==========================
// Objects and this keyword
// ==========================
const person = {
  name: "Roni",
  walk() {
    console.log(this);
  },
};

person.walk();

// =================
// Binding this
// =================
const walk = person.walk.bind(person);
walk();

// =================
// Arrow Functions
// =================
const square = (number) => number * number;

console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);

// =================
// Array.map Method
// =================

const colors = ["red", "green", "blue"];

const items = colors.map((color) => `<li>${color}</li>`);

console.log(items);

// ======================
// Object Destructuring
// ======================

const address = {
  street: "",
  city: "",
  country: "",
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// SAME AS

const { street, city, country } = address;

// For alias
const { street: st } = address;


// ===================
// Spread Operator
// ===================
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combinedWithSpread = [...first, "a", ...second, "b"];

console.log(combinedWithSpread);

// object
const bio = {
  name: "Roni",
};

const job = {
  designation: "Lead Software Engineer",
};

const objectSpread = { ...bio, ...job, company: "accfintech" };

