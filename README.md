# JavaScript-Interview-Questions

# Questions:

# 1. How can I remove a specific item from an array in JavaScript?

Find the index of the array element you want to remove using indexOf, and then remove that index with splice.

The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);
```

The second parameter of splice is the number of elements to remove. Note that splice modifies the array in place and returns a new array containing the elements that have been removed.



# Code details:
1.Number Guessing game: Stored in a single file with same name,this file is made for user to guess the randomly generated number according to the hints given in the browser window.


2.Random Story Generator : This example will work on two files (main.js and index.html) for generating a random story each time the user clicks on the button. The US/UK radio buttons can be used to change the measurements provided in the story. User can also enter his name in the story using the top text field.
