//Fibonacci curve. Loops to infinity. JavaScript.

/*
*Declare and assign the variable values
*/

let a = 0;
let b = 1;
let c = 0;

//Looping through the fibonacci curve so the sum is equal to the sum of the preceding two numbers.
//Use less than infinity in the for loop or you'll end up like Buzz Lightyyear and go to 'infinity and beyond'!

for (let i = 2; i < Infinity; i++) { 
  a = b; 
  b = c; 
  c = a + b; 
  i = (c = a + b); 
    console.log(i); //Output the valves to the console. Use webpage inspection to view on your browser.
};


