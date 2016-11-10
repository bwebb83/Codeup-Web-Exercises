var i = 2;
while (i <= 65536) {
    console.log(i);
    i = i * 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;
console.log(allCones);

while(allCones > 0){
    if (cones < allCones){
        console.log("Thanks, you bought " + cones + " cones");
        allCones = allCones - cones;
    } else if (cones > allCones){
        console.log("We don't have that many cones");
    } else if (cones = allCones){
        console.log("You bought the rest of our cones!");
        allCones = allCones - cones;
    }
    console.log("There are " + allCones + " left.");
    var cones = Math.floor(Math.random() * 5) + 1;

}


//  var random = Math.floor(Math.random() * 20) + 1;
//if(random % 2 = 0){
//     console.log(random);
//     random += 2;
// }

