

// Question 1:
// Program to search for a particular character in a string

// lets create a simple string 
let str = "Hi! this is Pradeep"
// lets search for a particular character in above String and print it on console
console.log(str.search("P"));


// output-   12


/* ##########################################################################################################################*/

// Question 2
// Program to convert minutes to seconds

// lets create a variable to store minutes with name(min)
let min = 45
// print it on console by multiplying with 60
console.log(min*60);


// output- 2700



/* ##########################################################################################################################*/

// Question 3
// Program to search for a element in a array of strings

// lets create an array of strings
let items = ['hi', 'this', 'is', 'pradeep'];
// lets create  a variable using .find method using function to match a element
let found = items.find(function (element) { 
    return element == "this"; 
}); 
// now print it on console
console.log(found);


// output-  this



/* ##########################################################################################################################*/

// Question 4
// Program to display only elements containing 'a' in them from a array

// lets create an array
let items2 = ['hi', 'this', 'is', 'pradeep'];
// lets create a variable that filters the above array with a string that includes only containing "a"
let match = items2.filter(s=> s.includes("a"))
// now print it on console
console.log(match);


// this-  ["pradeep"]




/* ##########################################################################################################################*/

// Question 5
// Print an array in reverse order

// lets create an Array
let array = [0, 1, 2, 3, 4];
// now reverse the array using reverse function
let arr = array.reverse();
// now print it on console
console.log(arr);


// output-  (5) [4, 3, 2, 1, 0]


