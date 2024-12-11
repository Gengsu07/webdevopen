This section is already covered in our [fundamentals course](https://dashboard.webdevopen.com/c/fundamentals/sections/71155/lessons/231235)

## **What are arrays?**

Arrays are collections of ordered items. In a sense, an array is like a storage box with many numbers on it, as shown below.

Imagine that you put something in each numbered slot of this storage box. Whenever you come back to your storage box, you'll find that everything is exactly as you had left it, with each slot holding what you had originally put there. That's the idea behind an array—it helps you organize many items by storing every item in a specific numbered slot. You can then return to those slots as needed, and you know that they're storing whatever data or information you've put there. And in JavaScript, there's an added bonus: an array can have as many slots as you want!

Mosh has a good video to explain arrays

### **Demo: Creating an array**

You're ready to create an array in JavaScript. As always, play with the code in the snippet below; try making your own array in a CodePen and printing it out. And see what happens when you add two arrays together.

```javascript
let myFavoriteFruits = ["banana", "cherry", "mango"];
let myLuckyNumbers = [4, 8, 15, 16, 23, 42];

// add the two arrays:
let combinedArray = myFavoriteFruits + myLuckyNumbers;

console.log(myFavoriteFruits);
console.log(myLuckyNumbers);
console.log(combinedArray);
```

```javascript
let listOfPuppies = ["shadow", "mocha", "ranger"];
```

### **Array syntax explained**

Arrays must be structured in a particular way. The square brackets **\[** and **\]** show where the array starts and ends. A comma **,** separates each item in the array, but there's no comma after the last item.

Arrays are created with zero or more elements. Arrays can contain any data type—including other arrays. Take a look at these examples below.

```javascript
let listOfPuppies = ["shadow", "mocha", "ranger"];
let emptyArray = [];
let puppyAges = [0, 1, 2];

// we can mix strings and numbers!
let puppyAgeDescriptions = ["two months", "thirteen months", 2];

let puppiesAndAges = [
  ["shadow", "mocha", "ranger"],
  [0, 1, 2],
]; // arrays inside arrays! 🤯
<br>
```

## **Getting items from arrays**

Imagine you want to retrieve something from your storage box above. If you were expressing that action in words, you'd likely say, "Get me whatever item is in slot four." To get items from an array, you use a similar method.

You access an item in an array using _bracket notation_ and the _index_ of that item, which is that item's slot number. To do this, you use square brackets with the index inside, like **\[2\]**. This is easy to remember because you also create arrays with those square brackets **\[\].**

> Here's an important detail that trips up many new developers. **Arrays are zero indexed.** That means that the numbering system starts at zero, not one. So if you want to retrieve the first item in an array, you must ask for the item in position 0. It might help to think of this as an offset—you could ask yourself, "How many items from the beginning is the item that I want?" The first item is "zero items" from the beginning of an array, and is therefore in position 0.

```javascript
let listOfPuppies = ["shadow", "mocha", "ranger"];
listOfPuppies[0]; // 'shadow'
listOfPuppies[1]; // 'mocha'
listOfPuppies[2]; // 'ranger'
```

---

## **Changing what's in an array**

You've already learned that you can change what's in a variable by reassigning it. Refresh your memory by reviewing the example below.

```javascript
let dogAge = 6;
dogAge = 7; // happy birthday!
```

Turns out, you can do something similar with arrays: you can change what's stored in each numbered slot. If you want to change an array, you use _access and assign_.

```javascript
let dogAges = [6, 9, 10];
dogAges[0]; // 6
dogAges[0] = 7; // happy birthday to the first dog!
dogAges[0]; // 7
```

You can even use this technique to assign values to slots in the array that weren't holding any information to begin with.

```
let dogAges = [6, 9, 10];
dogAges[3] = 5; // a fourth dog, five years old
dogAges; // [6, 9, 10, 5]
```

### **Drill: Assign array values**

Complete the following drill on getting and reassigning array values.

Find the solution [here](https://codepen.io/root-learn/pen/NWYyKBR?editors=0012)

```javascript
let listOfPuppies = ["shadow", "mocha", "ranger"];
let puppyAges = [0, 1, 2];

// access puppyAges at the right index to find shadow's age

let shadowAge;

// mocha had a birthday! update her age to 2 in puppyAges
puppyAges;

// There's a new puppy called 'holly' - add her to listOfPuppies

listOfPuppies;

// don't forget to add holly's age (0) to the puppyAges array
puppyAges;
```

---

## **Commonly used array methods and properties**

You've already explored some helpful methods for working with strings, like **.replace()** and **.trim()**. One of the benefits of arrays is that they come with their own methods to help you perform common tasks. In fact, there are more than thirty array methods! But for now, you can focus on the three most common ones:

- **.push()**: This adds an item to the end of an array. It returns the new length of the array.
- **.pop()**: This removes the last item from the end of an array. It returns the last item.
- **.length**: Just like the string tool **.length**, this gives the length of the array—in other words, the number of items. You'll notice that **.length** doesn't need parentheses. That's because it's technically a _property_ and not a _method_.

Play around with the CodePen below to learn more about **.push()**, **.pop()**, and **.length**.

### **Demo: Push & Pop**

```javascript
let listOfPuppies = ["shadow", "mocha", "ranger"];
let puppyAges = [0, 1, 2];****

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
```

### **Does the original array change?**

When you learned about the string methods **.replace**, **.trim**, **.toUpperCase**, and **.toLowerCase**, you discovered that the original string doesn't change when you use these methods. Is the same thing true for array methods? Let's find out.

### **Demo: Array method mutations**

Check out the code in the Codepen below. What's going on?

```javascript
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
```

> In web development, the technical term that means "to change the original" is _to mutate_. The string methods you learned about will not mutate a string. But of the array methods you've explored so far, **push** and **pop** will mutate an array, but **length** will not. As you learn new array methods, it can be helpful to ask yourself: Does this method mutate the array?

---
