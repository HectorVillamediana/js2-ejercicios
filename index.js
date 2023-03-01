//==========================================================================================//
//Ejercicios

/*
Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.

Print the string on the browser console using console.log()

Print the length of the string on the browser console using console.log()

Change all the string characters to capital letters using toUpperCase() method

Change all the string characters to lowercase letters using toLowerCase() method

Cut (slice) out the first word of the string using substr() or substring() method

Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.

Check if the string contains a word Script using includes() method

Split the string into an array using split() method

Split the string Long Days Of JavaScript at the space using split() method

'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

Change Long Days Of JavaScript to Long Days Of Python using replace() method.

What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.

What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()

Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript

Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.

Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.

Use startsWith() method with the string Long Days Of JavaScript and make the result true

Use endsWith() method with the string Long Days Of JavaScript and make the result true

Use match() method to find all the a’s in Long Days Of JavaScript

Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'

Use repeat() method to print Long Days Of JavaScript 2 times
*/

let challenge = 'Long Days Of JavaScript';
console.log("cosolog:", challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substring(1, 4));
console.log(challenge.substring(5, 23));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));

let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(socialMedia.split(" "));

console.log(challenge.replace("JavaScript", "Phyton"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"));

console.log(sentence.search("because"));

let stringTrim = ' Long Days Of JavaScript ';
console.log(stringTrim.trim());

console.log(stringTrim.startsWith(' L'));
console.log(stringTrim.endsWith('t '));
console.log(stringTrim.match("a"));

let long = "Long days of "
let javas = "JavaScript"

console.log(long.concat(javas));

console.log(stringTrim.repeat(2));

/*
## Exercise: Level 2

1.  Using console.log() print out the following statement:
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
2.  Using console.log() print out the following quote by Mother Teresa:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4.  Check if parseFloat('9.8') is equal to 10 if not make it exqactly eual with 10.
5.  Check if 'on' is found in both python and jargon
6.  _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
7.  Generate a random number between 0 and 100 inclusively.
8.  Generate a random number between 50 and 100 inclusively.
9.  Generate a random number between 0 and 255 inclusively.
10.  Access the 'JavaScript' string characters using a random number.
11.  Use console.log() and escape characters to print the following pattern.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
12.  Use **substr** to slice out the phrase **because because because** from the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
### [](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#exercises-level-3)
*/

console.log('There is no exercise better for the heart than reaching down and lifting people up.');
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");


console.log(typeof ("10") == 10);
console.log(parseInt("10") == 10);

console.log(typeof ("9.8") == 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);

console.log("phyton".includes("on") && "jargon".includes("on"));
console.log("_I hope this course is not full of jargon_".includes("_jargon_"));
console.log(Math.random() * 100);
console.log(Math.random() * 50 + 50);
console.log(Math.random() * 255);
console.log("Javascript".charAt(7));
console.log("1 1 1 1 1" +
    "\n2 1 2 4 8" +
    "\n3 1 3 9 272" +
    "\n4 1 4 16 6" +
    "\n5 1 5 25 125");

/*### Exercises: Level 3

1.  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word **love** in this sentence.
 
2.  Use **match()** to count the number of all **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
 
3.  Clean the following text and find the most frequent word (hint, use replace and regular expressions).
 
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 
4.  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/


console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.split("love").length);
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/g).length);
let cleanString = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'.replaceAll("@", "").replaceAll("%", "").replaceAll("$", "").replaceAll("&","").replaceAll("#", "");
console.log(cleanString.split(" "));