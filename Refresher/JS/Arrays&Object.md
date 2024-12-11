## **Learning Goals**

After this lesson you will be able to:

- Understand the term data structure
- Understand how / why data structures are often nested
- Access values from deeply nested structures

---

## **What is a Data Structure (Recap)**

A data structure is _a particular way of organizing data.  
_

✔️ _The better we can organize our data, the better we can represent people, places, objects, items; the world around us, in code.  
_

For instance, an array of strings would be a good structure to organize a list of students.

```javascript
const students = ["Bob", "Susy", "Ted", "Sarah", "Bill"];
```

The _data_ is _structured_ in the format of a list. To retrieve a particular item, we need to reference the index of the array.

```javascript
console.log(students[0]);
// Bob
```

Objects are another way of structuring our data. They are good for _labeling_ data and building more complex structures.

```javascript
const bob = { name: "Bob", age: 17 };
const susy = { name: "Susy", age: 18 };
const ted = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill = { name: "Bill", age: 19 };
```

We can access specific values by referencing keys.

```
console.log(bob.name); // &lt;== Bob
console.log(susy.age); // &lt;== 18
```

Occasionally, we're going to have very complex data that needs to be structured differently.

---

## **Nested Data Structures**

Let's take the student example through a few iterations.

###  **1. Objects in Arrays**

In reality, a better solution for the list of students would be an **array of objects**. Each student is an object and a collection of them forms the array of students.

```javascript
const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 },
];
```

**students\[<index>\]** is going to be a student object! Let's grab Sarah's name.

```javascript
console.log(students[3].name); // &lt;== Sarah
```

**Adding To Arrays**

As previously discussed, we can use the .push() method to add things to arrays. This applies also to adding objects to arrays.

```javascript
students.push({ name: "Steve", age: 25 });

const bob = { name: "Bob", age: 21 };
students.push(bob);
```

📝 **Time to practice**

In the _students_ array above:

- Get the value of the first student's name

```javascript
students[0].name;
```

- Get the age of the student named Sarah

```javascript
for (i = 0; i < students.length; i++) {
  if (students[i].name === "Sarah") console.log(students[i].age); // prints 20
}
```

---

### **2\. Arrays in Arrays**

**A Simple Example**

> ⚠️ Sometimes we need to have such a data structure to nest an array inside of an array. This is called a two-dimensional array. ::: Let's take a look at a simple example.

```javascript
const twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"],
];
```

> ✅ In this structure, to reference an element, is to reference _an entire array_.

```javascript
console.log(twoD[1]); // &lt;== [ 'Lilly', 'Sarah', 'Bill' ]

console.log(twoD[1][0]); // &lt;== 'Lilly'

console.log(twoD[0][0]); // &lt;== 'Bob'

console.log(twoD[0][3]); // &lt;== undefined

console.log(twoD[3][0]); // TypeError: Cannot read property '0' of undefined
```

**  
A More Complex Example  
**

Let's expand the student example to represent more than one classroom. This would be a list of lists containing students, or an **array of arrays containing objects**.

📝 **Time to practice**

From the array of classes:

- Retrieve the second "classroom" of students
- Retrieve the first name "Antonette"
- Retrieve the age 18
- Retrieve the last name "Beatty"

---

### **Objects inside of Objects**

Objects inside of objects can be tricky to deal with. Let's create a classRoom object, which will have a teacher in it.

```javascript
const classRoom = {
  teacher: { firstName: "Greg", lastName: "Dach", age: 38 },
};
```

Remember, when we're accessing a value inside of the teacher object, we have to go through the classRoom object first.

```javascript
console.log(classRoom.teacher.firstName); // &lt;== 'Greg'

console.log(classRoom.teacher.age); // &lt;== 38
```

We can go as many levels deep as we want:  
To get the _city_ from the address object which is nested in the teacher object which is nested in the classRoom object:

```javascript
console.log(classroom.teacher.address.city); // &lt;== "Aldaside"
```

📝 **Time to practice**

Get back the teacher's age from the classRoom object.

---

## **Real World Applications**

**Databases**

Data Structures, specifically arrays and hashes in JavaScript, are incredibly important. Later on when we get to databases, most of our database objects are going to be in the form of nested objects and arrays.

**Web APIs**

When we're trying to get information in the future from APIs (web services that give us back information), it's going to be formatted much like our JavaScript objects.

For instance, let's take a look at the [PunkAPI](https://api.punkapi.com/v2/beers/random), that brings us a random beer, with its ingredients and other information.

In the link above, PunkAPI gives us a random beer from its database. You can notice that the element that the API send us is a nested object with a lot of info.

---

## **Summary**

In this lesson, we learned about all different varieties of JavaScript structures and how to access the data inside of them. We covered arrays in arrays, objects in arrays, and many different combinations of the two.

We also took a look at how all that might look in the real world applications.

All in all, data structures in programming are **SUPER** important. There are dozens of other structures in different languages, but in JavaScript the array and object are core.

Data Structures let us represent the world around us more effectively, and you will be a more efficient programmer if you develop the skill to structure well information needed to develop your apps successfully.

## **Extra Resources**

- [Back to Basics: JavaScript Objects](https://www.sitepoint.com/back-to-basics-javascript-object-syntax/)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
