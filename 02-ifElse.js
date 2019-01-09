// If Else Statements

let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('Make coffee')
}


let  myName = 'Timjo' 

if (myName) {
    console.log('my name is ' + myName)
    console.log('my name is' , myName)
    console.log(`my name is ${myName}.`)
} else {
    console.log('hello, what is your name')
}


/*
Challeng:
Capitalize the fir letter of nae only */


/* If / Else If */ //ING'S Slack
let FB = 15;

if (FB % 5 == 0 && FB % 3 == 0) {
  console.log('Fizz Buzz');
} else if (FB % 5 == 0) {
  console.log('Buzz')
} else if (FB % 3 == 0) {
  console.log('Fizz')
} else {
  console.log('That\'s not a number')
}

/* Switch Case */
let FB = 15;

switch (true) {
  case (FB % 3 == 0 && FB % 5 == 0) :
    console.log('Fizz Buzz');
    break;
  case (FB % 3 == 0):
    console.log('Buzz');
    break;
  case (FB % 5 == 0):
    console.log('Fizz');
    break;
  default:
    console.log('FB is not divisible by 15, 5, or 3')
}

/* Ternary */
let FB = 42

(FB % 15 == 0) ? console.log('Fizz Buzz') : (FB % 3 == 0) ? console.log('Fizz') : (FB % 5 == 0) ? console.log('Buzz') : console.log('You screwed up.')



let myName = 'harRy'

let myNameChanged = myName.charAt(3).toLowerCase()

let myNameChanged2 = myName.charAt(0).toUpperCase()

console.log(myNameChanged2)

let myName = 'harRy'

if (myName === 'Harry') {
    console.log(myName)
} else {myName = 'Harry'
    console.log(myName)
}

/* */

let str = 'sebAstion'

if (str[0] === str[0].touUpperCase()) {
    let firstLetter = sgr[0] + str.slice(1).toLowerCase(
        console.log(firstLetter)
    )
} else {

}




//**** Else/If Statements */

let weather = 40

if (weather > 70) {
    console.log('Wear a t-shirt')
} else if (weather<= 70 && weather > 50) {
    console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
}

let age = 10

if (age < 17) {
    console.log('Sorry, youre to young to do anything.')
} else if (age>= 18) {
    console.log('Yay, you can vote!')
} else (age>= 21); {
    console.log('Yay, you can rent a car!')
}

/*   Solution /*/


let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'


if (age >= 0 && age < 120) {
    console.log('rent, drink, vote')
} else if (age >21) {
    console.log('drink')
} else if (age >= 18) {
    console.log('vote')
} else {
    console.log('Please pick your self up off the floor')
  }




