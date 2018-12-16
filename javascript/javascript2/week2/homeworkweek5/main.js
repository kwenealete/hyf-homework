console.log("testing");


//step 1

//1.1

function divisible(startVal, endVal, threeCallback, fiveCallback) {
    let numbers = [];
    for(let i = startVal ; i <= endVal ; i++){ 
    
        if( i % 3 === 0 && i%5===0){
            threeCallback(i);
            fiveCallback(i);
            
        } else if (i % 5 === 0){
            fiveCallback(i);
        } else if (i % 3 === 0){
            threeCallback(i);
        }
    numbers.push(i); 
    }    
  console.log(numbers);
}

let sayThree = (val) => console.log("The number "+ val + " is divisible by three");;
let sayFive = (val) => console.log("The number "+ val + " is divisible by five");

divisible(10, 30, sayThree, sayFive);

//1.3 using a for loop
function repeatString(str, num) {
    let newStr = '';
    for(; num >= 1 ; num--){
      newStr += str;
    }
    return newStr;
  }

  console.log(repeatString("abc", 3));


//1.4 : using a while loop

  function rptStr(str, num) {
    let newStr = '';
    while(num >= 1){
        newStr += str;
        num--;
    }
    return newStr;
  }

  console.log(rptStr("def", 3));


// 1. :using a do loop

  function repeatStr(str, num) {
    let newStr = '';
    do{
        newStr += str;
        num--;
    }
    while (num >= 1);
    return newStr;
  }

console.log(repeatStr("ghi", 3));


//1.9

let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x); //the value 9 is logged out. this is beacuse x is declared globally and then passed to the function but was never changed.


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);  //logs out 10 beacuse when calling the function, 1 is added to the value with key "x". 
//
//
