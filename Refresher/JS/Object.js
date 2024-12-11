// Drill: Fruit basket
let frutiBasket = {};

// Adding fruits to the basket
frutiBasket.banana = "yellow";
frutiBasket.avocado = "green";
frutiBasket.strawberry = "red";

console.log(frutiBasket);

// Drill: Programming Language
let language = {};

// Adding programming languages to the object
language.cobol = "Grace Hopper";
language.java = "James Gosling";
language.python = "Guido van Rossum";
language.javascript = "Brendan Eich";
language.swift = "Chris Lattner";
language.ruby = "Yukihiro Matsumoto";
language.go = "Robert Griesemer";
language.rust = "John Gleick";
console.log(language);

// Drill: Student swap
// You've noticed that two students have been mixed up. In other words, the information for one student, Jacob, is actually the correct information for another student, Guillermo, and vice versa.
let students = {
  jacob: {
    classes: ["math", "chemistry", "english"],
    grade: 11,
    age: 16,
  },
  guillermo: {
    classes: ["history", "math", "physics"],
    grade: 12,
    age: 17,
  },
};
let temp = students["guillermo"];
students.guillermo = students.jacob;
students.jacob = temp;
console.log(students);

// Guided Activity: see markdown
// Initial code
let product = {
  name: "headphones",
  price: 120,
  doesItWork: false,
  previousOwner: "Bob",
};
for (let key in product) {
  console.log(`${key} : ${product[key]}`);
}
// Delete the previousOwner property.
delete product.previousOwner;

// Update the doesItWork property to be true.
product.doesItWork = true;

// if the price of the product is higher than 100. In case it is, add a new property discountPercentage with a value of 10.
if (product["price"] > 100) {
  product["discountPercentage"] = 10;
}

// update the price property to be the discounted one! Price minus 10%
product.price -= product.price * (product.discountPercentage / 100);

for (let key in product) {
  if (key === "discountPercentage") {
    console.log(
      `We got some headphones on sale for just ${product.price}, that's ${product.discountPercentage}% off!`
    );
  }
}
