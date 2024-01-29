'use strict';

// 1

function sumOfNums (...numbers) {
    let sum = 0;
    for (let elements of numbers) {
        sum += elements;
    }

    return sum;
}

let resultSum = sumOfNums (10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(resultSum);


let sumOfNums2 = function (...numbers) {
    let sum = 0;

    for (let elements of numbers) {
        sum += elements;
    }

    return sum;
}

let result = sumOfNums2 (10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(result)


let sumOfNums3 = (...numbers) => {
    let sum = 0;

    for (let elements of numbers) {
        sum += elements;
    }
    return sum;
}

let result3 = sumOfNums3(10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(result3)


// 2

let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
  };

  console.log(user.firstname + " " + user.lastname);
  console.log(`${user.firstname} ${user.lastname}`);

  if(user.isloggedin == true) {
    console.log('true');
  }else {
    console.log('false')
  }


//3

function getMAximum (...numbers) {
    let maximumValue = 0;

    for(let x of numbers) {
        if (x > maximumValue) {
            maximumValue = x;
        }
    }
    return maximumValue;
}

let resultValue = getMAximum(5, 10, 35, 55, 77, 100, 250, 375, 4, 14, 11)
console.log(resultValue)


// 4


function func (x) {
    if( x % 2 === 0) {
        return 'this number is even'
    } else {
        return 'this number is odd'
    }
}

let resultX = func(15)
console.log(resultX)


let func1 = (x) => {
    let i = x % 2 === 0 ? 'this number is even' : 'this number is odd'
    return i;
}

let resultFunc1 = func1(18)
console.log(resultFunc1)
// 5

let array = [1, 2, 3, 4, 5];

for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index])
    
}

// 6

function userStatus (age) {
    if(age >= 18) {
        console.log ('სრულწლოვანი');
    }else {
        console.log('არასრულწლოვანი');
    }
}

userStatus(23);


let userAge = (age1) => age1 >= 18 ? 'სრულწლოვანი': 'არასრულწლოვანი';

let userStatus1 = userAge(14);
console.log(userStatus1)