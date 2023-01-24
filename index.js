let myName = "Aida";
console.log(myName);
let myLastName = "Edigeeva";
console.log(myLastName);

let myTown = "Karakol";
console.log(myTown);

let myStatus = "mama";
console.log(myStatus);

let ourCoutry = "Kyrgyzstan";
console.log(ourCoutry);

let myFavoriteBook = "Буть лучшей версией себя";
console.log(myFavoriteBook);

let myFavoriteFood = "шашлычок";
console.log(myFavoriteFood);

let myFavoriteFlower = "розы";
let myFavoriteCar = "lamborginy";
let myDream = "стать лучшим программистом";

let myFavoriteNumber = 7;
let myAge = 37;
let myCarNumber = 6364;
let homeNumber = 42;
let inOurFfmily = 5;
let itStudents = 17;
let ourPopulation = 7000000;
let regionKyrgyzstan = 7;
let myHeight = 167;
let theWeight = 60;

let width = 40;
let heght = 22;
let length = 65;
let volume = width * heght * length;
console.log(volume);
 
let girl = 12;
let boy = 18;
let students = girl + boy ;
console.log(students);

let flowers = 46;
let women = 8;
let bouquet = flowers / women;
console.log(bouquet);

let ex = (3*2) > 22;
let ex1 = 11/5;
console.log(ex1);

// let a = 5, b = 8,c = 5;

let number = "пять";
if (number > 0){
  console.log("число " + number + " положительное");
}
else if (number < 0) {
  console.log("Число " + number + " отрицательное");
}
else if(number === 0) {
  console.log("число ноль не отрицательное и не положительное");
}
else {
  console.log("пять не является числом");
}


// является ли число 5 четным или нечетным числом?
let number2 = 5;
if (number2 / 2) {
  console.log( number2 + "является четным числом");
}
else if ( number2 % 2 === 1) {
  console.log (number2 + "не явяется четным числом");
}
else {
  console.log(number2 + "is not a number");
} 

//У Васи 212 сомов чватит ли ему денег на мороженое которая стоит 40 сом.
let Vasy = 212;
let icecream = 40;
if ( Vasy >= icecream ){
  console.log(Vasy + "is enogh");
}
else if ( Vasy <= icecream ) {
  console.log ( Vasy + "is not enogh");
}
//Вывести каким сезоном является ли "январь"?
 let month = "январь";
 if ( month === "декабрь" || month === "январь" || month === "февраль"){
  console.log( " это зима ");
 }
 else if ( month === "март" || month === "апрель" || month=== "май"){
  console.log(" это весна");
 }
 else ( month === "июнь" || month === "июль" || month === "август"){
  console.log ("это лето");
 }
 