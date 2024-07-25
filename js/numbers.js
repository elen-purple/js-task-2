// 1
const temperatureInCelsius = 30;
console.log("Temperature in Celsius: " + temperatureInCelsius + "°С");
const temperatureInFahrenheit = (temperatureInCelsius / 4) * 9;
console.log("Temperature in Fahrenheit: " + temperatureInFahrenheit + "°F");
// 2
const daysInMounth = 30;
console.log("Days in mounth: " + daysInMounth);
const hoursInMounth = daysInMounth * 24;
console.log("Hours in mounth: " + hoursInMounth);
const minutesInMounth = hoursInMounth * 60;
console.log("Munites in mounth: " + minutesInMounth);
// 3
let heroHealth = 100;
console.log("Hero health: " + heroHealth);
let heroEnergy = 100;
console.log("Hero energy: " + heroEnergy);
heroHealth -= 10;
heroEnergy -= 10;
console.log("Hero health: " + heroHealth);
console.log("Hero energy: " + heroEnergy);
// 4
let amountOfPurchases = 1000;
console.log("Amount of purchases: " + amountOfPurchases);
const discount = 10;
amountOfPurchases *= (100 - discount) / 100;
console.log("Amount of purchases: " + amountOfPurchases);
// 5
const floatingPointVariable = "1.6";
console.log(Math.floor(floatingPointVariable));
// 6
const floatVariable = "1.6";
console.log(parseFloat(floatingPointVariable));
// 7
const wholeVariable = "4";
console.log(parseInt(wholeVariable));
// 8
const squareRootVariable = 16;
console.log(Math.sqrt(squareRootVariable));
// 9
const stringNumberVariable = "10";
const wholeNumberVariable = 10;
console.log(parseInt(stringNumberVariable));
console.log(toString(wholeNumberVariable));
