/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 52

function scope() {
  var x = 33
  console.log(x);
}
scope()//33
console.log(x); //12
 

var x = 12

function scope() {
  x = 33 // HERE
//   7 = 123
  console.log(x);
}

scope() 
console.log(x);



/*
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? Well, check out the below:
*/

var x = 12

function scope() {
  var x = 33
  if (true){
    var x = 45;
    console.log(x);
  }
  console.log(x);

}

/*                 */

scope() 
console.log(x); 
//what is the expected output from above?

var x = 12

function scope() {
  // var x = 33 // HERE
  if (true){
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

scope() // 45, 33
console.log(x); //12
//what is the expected output from above?