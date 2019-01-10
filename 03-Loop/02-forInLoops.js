var pieArray = ['cherry' , 'apple' , 'chocolate peanut butter' , 'chicken pot pie'];
for (let tom in pieArray) {
    console.log(tom);
}

// challenge  write a for in loop that capitalizes the first letter in studen't name

// var studentsname = ['john' , 'phil' , 'jeff'];
//     for (let )


///////***** */


var studentName = 'hArRy';
var capName;
for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    }   else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName)