//Fibonacci curve. Loops to infinity. JavaScript.

let a = 0, b = 1, c = 0;

for (let i = 2; i < Infinity; i++) { 
  a = b; 
  b = c; 
  c = a + b; 
  i = (c = a + b); 
    console.log(i);
};


