//Age-ify (A future age calculator) 

const yearOfBirth = 1990;

const yearFuture = 2097;

let age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture + '.');


//Goodboy-olbboy (A dog age calculator)

const dogYearOfBirth = 2006;

const dogYearFuture = 2045;

const dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears){
    //Calculation based on the example of 10 for human years and 70 for dog years, 1:7

    console.log('Your dog will be ' + dogYear + ' dog years old in ' + dogYearFuture + '.');
}
else{
    console.log('Your dog will be ' + dogYear + ' human years old ' + dogYearFuture + '.');
}


//housey-pricey (A house price calculator)

housePrice = "volumeInMeters" * 2.5 * 1000 + "gardenInM2" * 300;

let peterHousecost = 2500000;

let juliaHouseCost = 1000000;

let peterHousePrice = (8 * 10 * 10 * 2.5 * 1000) + (100 * 300);

let juliaHousePrice = (5 * 11 * 8 * 2.5 * 1000) + (70 * 300);

console.log("Peter's house price is " + peterHousePrice);

if(peterHousePrice > peterHousecost){
    console.log('Peter is paying too much');
}
else{
    console.log('Peter is paying too little');
}


console.log("Julia's house price is " + juliaHousePrice)

if(juliaHousePrice > juliaHouseCost){
    console.log('Julia is paying too much');
}
else{
    console.log('Julia is paying too little');
}


//Ez Namey (Start up name generator)

firstWords = ['Easy' , 'Cope' , 'Great' , 'Frig' , 'Kosam' , 'Hack' , 'Future' , 'Coding' , 'Program' , 'Dane'];

secondWords = ['Ford' ,'Bmw' ,'Mini' ,'Cooper' ,'Jaquar' ,'Nissan' ,'Kia' ,'Toyota' ,'Benz' ,'Astra'];

let startUpName;

startUpName = firstWords[6] + ' ' + secondWords[9];

console.log('The start up name is ' + startUpName + ' and it is made up of ' + startUpName.length + ' characters.');