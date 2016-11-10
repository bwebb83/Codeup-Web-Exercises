/**
 * Created by Brian on 11/4/16.
 */
var luckyNumber = Math.floor(Math.random()* 6)
console.log(luckyNumber);

switch(luckyNumber){
    case 0:
        console.log("$60");
        break;
    case 1:
        console.log("$" + (60-(60*.10)));
        break;
    case 2:
        console.log("$" + (60-(60*.25)));
        break;
    case 3:
        console.log("$" + (60-(60*.30)));
        break;
    case 4:
        console.log("$" + (60-(60*.50)));
        break;
    case 5:
        console.log("It's free!");
        break;
}


var luckyNumber2 = Math.floor(Math.random()* 13)
console.log(luckyNumber2)
switch(luckyNumber2){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("This is not a month");

}