/**
 * Created by Brian on 11/3/16.
 */
var grade = (70 + 80 + 95) / 3
if (grade > 80) {
    console.log("You're awesome!");
} else {
    console.log("You need to practice more!");
}


var ryan = 250;
var cameron = 180;
var george = 320;

var discount = .10;

if (ryan > 200) {
    console.log("Ryan gets a discount of $" + (ryan * discount));
} else {
    console.log("Ryan needs to pay" + (200 - ryan) + " to get the discount.");
}

if (cameron > 200) {
    console.log("Cameron gets a discount of $" + (cameron * discount));
} else {
    console.log("Cameron needs to pay " + (200 - cameron) + " to get the discount.");
}

if (george > 200) {
    console.log("George gets a discount of $" + (george * discount));
} else {
    console.log("George needs to pay" + (200 - george) + " to get the discount.");
}


var flipACoin = Math.floor(Math.random() * 2)

console.log(flipACoin);

if (flipACoin == 0) {
    console.log("Buy a car!");
} else {
    console.log("Buy a house!");
}