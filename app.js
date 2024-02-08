const city = "Monterrey";
const country = "Mexico";
const language = "Spanish";

console.log(`I grew up in ${city},${country}.The language spoken over there is ${language}`);

////

const imhungry = true;
const thereistacos = false;

if (imhungry) {
    if (thereistacos) {
        console.log("I'm hungry and there's tacos available. Let's eat some tacos!"); 
    } else {
        console.log("I'm hungry but there's no tacos available. Let's order some tacos!");
    }
} else {
    console.log("I'm not hungry right now. I skip the tacos for today.");}

    ///

    const favoritefood = "tacos";


switch (favoritefood) {
    case "tacos":
        console.log("I love tacos with all my heart!");
        break;
    case "pizza":
        console.log("Pizza its another one of my favorite foods!");
        break;
    case "sushi":
        console.log("I could eat as many sushi rolls as tacos");
    default:
        console.log("If you dont like sushi, tacos or pizza,leave my page, you are not my friend.");
}

///

const lowercaseString = "Im not yelling,you are!";

const uppercaseString = lowercaseString.toUpperCase();

console.log(uppercaseString); 

///

const number = 166.23456784569;

const formattedNumber = number.toPrecision(4);

console.log(formattedNumber);