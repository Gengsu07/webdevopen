## **An introduction to objects**

Take a moment to revisit what you know about arrays. When you were first introduced to the concept, you saw an image of a storage box that held many numbered slots. As you learned, an array works just like that storage box. The slots of an array are numbered, or indexed, like in the storage box, so that you can reliably manipulate their contents in a certain order.

The array will be an essential part of your journey as a developer. But there is an equally important collection type that you'll also need to master. It's called the object.

Another amazing video you must watch by Mosh to clearly understand Objects

### **A new type of collection**

So, what are objects? An object is a type of collection that holds information, just like an array. But instead of operating like a storage box, an object can be represented using another analogy. Objects are like a collection of gifts that need to be handed out to a group of people.

An _object_ holds many _values_ (represented by the gifts), and each _value_ has a unique key (represented by the gift tags). Let's model the gift example below using an object.

```
// an example of an object
let gifts = {
  tommy: "stuffed giraffe",
  lisa: "coloring book",
  roberto: "baseball cap",
  beth: "suit of armor",
};
```

What you see here is a JavaScript _object_. It has the unique gift tags—or the children's names, as you see above—which are known as _keys_ or _properties_ in JavaScript. And it has the gifts themselves—the coloring book and baseball hat, for instance—which are called _values_.

Objects allow you to keep track of the value that belongs to each key. Then, you can retrieve a value using the name of the key.

```
gifts["tommy"]; // 'stuffed giraffe'
```

---

### **Object syntax**

Before going any further, you'll need to learn about object syntax. Objects start and end with curly brackets: the **{** and **}.** Keys must be a string data type, but they can be any string. A colon : sits between each key and the value it points to, and a comma , separates **key: value** pairs.

Unlike keys, values can be any data type. They can be a number, an array, a boolean value, null, or even another object. Any JavaScript data type can be a value. Take a look at the example below.

```

// an Object with a mix of data types
let actionFigure = {
  name: "Super Awesome Guy",
  heightInCentimeters: 10,
  accessories: ["cape", "disguise", "laser ring"],
  limitedEdition: true,
};

```

---

### **Dot notation**

Once an object is defined, you can get the values inside it using either _dot notation_ or _bracket notation_. Dot notation is the most common method for retrieving values from inside an object, and it looks like this: **objectName.key**. As you can see, this notation uses a period ., or dot.

Check out the example below. Can you see the dot notation in action?

```

let actionFigure = {
  name: "Super Awesome Guy",
  heightInCentimeters: 10,
  accessories: ["cape", "disguise", "laser ring"],
  limitedEdition: true,
};
actionFigure.name; // 'Super Awesome Guy'
actionFigure.limitedEdition; // true

```

### **Demo: Accessing values inside an object**

It's time for a demo. Play around with this CodePen to practice accessing values inside an object.

---

### **Bracket notation**

However, dot notation won't always work. You'll sometimes need to use bracket notation when the key you wish to access is a string with a space in it. In this case, the key won't work as a dot accessor. Take a look at the examples below.

```
// getting information out of an object
let categories = {
  'best picture': 'Shrek',
  'best director': 'Shrek 2'
};

// we can't do these
categories.best director;
categories.best picture;

// so we use bracket notation
categories['best picture']; // 'Shrek'
categories['best director']; // 'Shrek 2'

```

You can see that the notation that works here is **objectName\[key\]** because there are spaces in the key **'best picture'** and **'best director'**. And as you might've noticed, using bracket notation looks a lot like accessing values in an array, except that you can use names instead of numbers.

### **Adding key–value pairs to an object**

Once you've defined an object, you can add new key–value pairs to the object using either dot notation or bracket notation. Here's an example of how to add a key and an associated value to an object. Which key–value pairs are being added to this object?

```
// adding a new key/value pair
let myFamily = {
  mom: "Cynthia",
  dad: "Paul",
};

myFamily.sister = "Lucinda"; // dot notation
myFamily["brother in law"] = "Merle"; // bracket notation
```

## **Removing Properties**

Sometimes the structure that is described in objects changes and we have to remove some properties. Let's suppose we have made a mistake and added a new key, "sister":

```
myFamily.sister = "Lucinda";
```

Well, we can use the [**delete** operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) to remove keys from an object. It is as simple as specifying which key you want to remove:

```
delete myFamily.sister;
```

---

## **Object notation practice**

Here are some drills to help you practice this new object notation.

### **Drill: Fruit basket**

You're putting together a colorful fruit basket for a friend, and you're using an object to plan what fruit you'll put in. Use the syntax for adding values to add the following fruits to the **fruitBasket** object in the CodePen below. The fruit name is the new key, and the color is the new value.

```
banana: "yellow";
avocado: "green";
strawberry: "red";
```

[https://codepen.io/openbootcamp/pen/vYRdGeM](https://codepen.io/openbootcamp/pen/vYRdGeM)

You can find the solution [here](https://codepen.io/root-learn/pen/LYdQNOg?editors=0012)

---

### **Drill: Programming languages**

You just learned about the creators of different programming languages, and you want to show off your new knowledge. In the REPL below, add the programming languages **'cobol'**, **'swift'**, **'javascript'**, and **'java'** to the **languages** object. The key should be the name of the programming language. The value should be the name of the creator of the language, as a string.

```
cobol: "Grace Hopper";
javascript: "Brendan Eich";
java: "James Gosling";
swift: "Chris Lattner";
```

You can find the solution [here](https://codepen.io/root-learn/pen/MWVQyQv?editors=0010)

---

### **Drill: Student swap**

Once again, imagine you're back in high school—this time, you're working on the school's student roster. You've noticed that two students have been mixed up. In other words, the information for one student, Jacob, is actually the correct information for another student, Guillermo, and vice versa.

In the REPL below, change **jacob** with **guillermo**.

> **Hint:** Create a temporary variable to hold Jacob's value while you swap it for Guillermo.

You can find the solution [here](https://codepen.io/root-learn/pen/GRxQZdK?editors=0012)

```javascript
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
```

---

## **Objects in arrays**

Okay, it's time to kick it up a notch! You've seen that arrays can store numbers, strings, and boolean values. But arrays can also store objects.

In the example below, you'll see an array with multiple objects inside it. The code uses a **for** loop, which you're familiar with, to check each object in the array. Specifically, the **for** loop is checking whether each object has **attending** set to **true** or **false**.

This loop uses almost every concept you've seen so far: variables, control flow, loops, arrays, and objects. Read the code carefully before running it, and try to predict what it will do.

### **Demo: Objects in a loop**

It's worth noting that the problem you see in this demo is a common type of problem you'll encounter as a developer. You'll practice many more examples like this one, and over time, you'll become more comfortable writing code that handles arrays of objects.

```javascript
let partyPeople = [
  { name: "Joe", attending: false },
  { name: "Jasmine", attending: true },
  { name: "Julio", attending: false },
  { name: "Julia", attending: true },
];
/*
loop through each item
check if the person is attending
if they are attending, say they are partying
otherwise, say they are burnt out
*/
for (let i = 0; i < partyPeople.length; i++) {
  if (partyPeople[i].attending) {
    console.log(partyPeople[i].name + " is partying!");
  } else {
    console.log(partyPeople[i].name + " is burnt out on partying =(");
  }
}
```

---

## **List Properties**

Next up, we will show you an object method that will help you list all the properties of the object.

This is extremely useful when you work with a huge object and you are not sure what properties it has. [**Object.keys()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) receives an object as an argument. In our case it would be:

```javascript
let olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powell",
};
let allKeys = Object.keys(olympicRecords);

console.log(allKeys);

// console output:
// [ "athletics100Men", "athleticsLongJumpMen" ]
```

## **Loops in objects**

Although you can use **Object.keys()** and **for** loops, In JavaScript, there is a loop designed explicitly for iterating over objects. This loop is called [**for..in**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

To see which are the properties, the syntax is as follows:

```javascript
let olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powell",
};

//    placeholder - can be any word (key, record, blah, pizza but pick meaningful names)

for (let key in olympicRecords) {
  console.log(key);
}

// athletics100Men
```

> The loop will always iterate as many times as the properties in the object. And in every iteration, the variable key (or whatever name you decide to give it) will be the current **key**.

Now that we know how to get the **keys**, let's see how we can get corresponding values:

```javascript
let olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powell",
};

for (let key in olympicRecords) {
  console.log(olympicRecords[key]); // &lt;== objectName[key]
}

// Justin Gatlin
// Mike Powell
```

> Remember earlier when we mentioned we would see the difference between **dot notation** and **bracket notation**? Well this is it! As you can see in the example above. The way to access the value of each property is with **bracket notation**. And if you were to try it with **dot notation** (olympicRecords.key), it would not work. It would instead try to access a **key** named "key" which doesn't exists, however, with **bracket notation** it will first evaluate the parameter **key** and use its value instead. This might be hard to understand now but it will make a lot more sense later during the course, so don't worry too much! 💪

## **The in operator**

The in operator is used to verify if a certain property exists in an object. It returns a boolean.

```javascript
let user = {
  name: "Ana",
  age: 27,
};

console.log("name" in user); // =&gt; true
console.log("age" in user); // =&gt; true
console.log("course" in user); // =&gt; false
```

---

## **📝 Guided Activity. 20 min.**

1.  Open a new **pen** on CodePen.
2.  Copy the following code at the beginning of your pen
3.  First, let's list all the properties of the object to see what we are dealing with. So, create a for in loop that will console.log the key and values of each property. _hint: remember that_ **_bracket notation_** _will be needed here_
4.  **Delete** the **previousOwner** property.
5.  **Update** the **doesItWork** property to be true.
6.  Create a conditional that will check if the **price** of the product is higher than 100. In case it is, add a new property **discountPercentage** with a value of 10.
7.  Using the **price** and **discountPercentage** properties (and a little bit of math 😉 ) **update** the **price** property to be the discounted one! _Price minus 10%_
8.  Finally, create a **conditional** that, using the **in** operator, will check of the **discountPercentage** property exists in the object and, if so, create a **console.log()** that uses the three property values to look something like this: **"We got some headphones on sale for just $108, that's 10% off!"**

### **✅ Solution** 

You can find the solution [here](https://codepen.io/openbootcamp/pen/QWmQEyq?editors=0012editors=0012)

---
