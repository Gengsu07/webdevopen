let listOfPuppies = ["shadow", "mocha", "ranger"];
let puppyAges = [0, 1, 2];

// access puppyAges at the right index to find shadow's age
puppyAges[0];

let shadowAge;

// mocha had a birthday! update her age to 2 in puppyAges
puppyAges[1] = 2;
puppyAges;

// There's a new puppy called 'holly' - add her to listOfPuppies
listOfPuppies.push("holly");
listOfPuppies;

// don't forget to add holly's age (0) to the puppyAges array
puppyAges.push(0);
puppyAges;

//---------------------------------
//          PUSH
//---------------------------------

let myFavoriteFruits = ["banana", "cherry", "mango"];

let returnof = myFavoriteFruits.push("pear");
console.log(myFavoriteFruits);
console.log(returnof); // number of elements in the array after push

returnof = myFavoriteFruits.push("banana");
console.log(myFavoriteFruits);
console.log(returnof); // number of elements in the array after push
//---------------------------------
//          POP
//---------------------------------

myFavoriteFruits = ["banana", "cherry", "mango", "pear"];

console.log(myFavoriteFruits.length); // prints array length, 4
returnof = myFavoriteFruits.pop(); // removes last item from the list
console.log(returnof); // return last removed item
console.log(myFavoriteFruits);
console.log(myFavoriteFruits.length); // prints array length, 3

console.log("=================================");

/* 
pop() both removes the last item from the 
array AND returns that item, so it can be used
for example to create a new variable.
*/
let lastFruit = myFavoriteFruits.pop();

console.log(lastFruit); // prints variable, which is 'mango'
console.log(myFavoriteFruits); // prints the array
console.log(myFavoriteFruits.length); // 2

console.log("=================================");

// We can use push() to move lastFruit back into the array
myFavoriteFruits.push(lastFruit); // adds lastFruit to the array
console.log(myFavoriteFruits);

const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 },
];

for (i = 0; i < students.length; i++) {
  if (students[i].name === "Sarah") console.log(students[i].age); // prints 20
}
