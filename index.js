const age = 18;
const isFemale = true;
const driverStatus = "bob";
// Deel 2: Ludieke actie!
const name = "Dick";
// Deel 3: Jubileum korting
const boozeAmount = "10";

if (age >= 18) {
  console.log("You May Enter");
} else {
  console.log("Sorry, You Are Not Allowed");
}

if (isFemale) {
  console.log("You are a women according to your ticket");
} else {
  console.log("Sorry, you are a man, You are not allowed!");
}

if (driverStatus === "bob") {
  console.log("Hi Bob, you can Drive!");
} else {
  console.log("You are not Bob, give me the keys!");
}
//  Deel 1: 50% korting
if (age >= 18 && age <= 25) {
  console.log("You will receove 50% discount for a beer!");
} else {
  console.log("Sorry, this is discrimination!");
}
// Deel 2: Ludieke actie!
if (name === "Sarah" || name === "Bram") {
  console.log("Get a Free Beer: Your name is Sarah or Bram,");
} else {
  console.log("Sorry, only Free Beer for Sarah and Bram");
}
// Deel 3: Jubileum korting
if (boozeAmount >= 100) {
  console.log("Free Champagne!");
} else if (boozeAmount > 50) {
  console.log("Free Nacho's");
} else if (boozeAmount > 25) {
  console.log("Free Vegan Dutch Balls");
} else {
  console.log("Are you not thirsty? There is no party without some booze!");
}
