"use strict";
(function() {
// write a function `chunk` that splits an array into chunks
// of 3
// ex
// > chunk([1,2,3,4,5,6,7])
//   [[1,2,3], [4,5,6], [7]]
// modify the function to take in a parameter for chunk size
    var i;
    var j;
    var temparray;
    var chunk = 3;


    var chunkArray = [1,2,3,4,5,6,7,8,9,10];


    var newArray = function(){
    for (i=0,j=chunkArray.length; i<j; i+=chunk) {
        temparray = chunkArray.slice(i,i+chunk);
        console.log(temparray);
    }};

    newArray();


    // var htmlString = "";
    // var pups = document.getElementById("pups");
    // var descriptions = document.getElementById("descriptions");
    // var spayded = document.getElementById("spayded");
    //
    // var puppies = [
    //     {
    //         name: 'muffins',
    //         description: 'this dog is as cute as a muffin!',
    //         spayed: true
    //     },
    //     {
    //         name: 'buddy',
    //         description: 'buddy is just waiting to be your best friend!',
    //         spayed: false
    //     },
    //     {
    //         name: 'ein',
    //         description: 'this corgi has quite seems like he\'s seen outer space...',
    //         spayed: true
    //     },
    //     {
    //         name: 'nibler',
    //         description: 'this puppy like to nibble, but she won\'t bite!',
    //         spayed: false
    //     }
    // ];
    //
    // puppies.forEach(function(puppy){
    //     htmlString += "<li>";
    //     htmlString +=  puppy.name;
    //     htmlString +="</li>";
    //     htmlString += "<li>";
    //     htmlString += puppy.description;
    //     htmlString += "</li>";
    //     htmlString += "<li>";
    //     htmlString += puppy.spayed;
    //     htmlString += "</li>";
    //     htmlString+="<br><br>";
    // });
    //
    // pups.innerHTML = htmlString;



// write a function that takes an array, and returns an object
// whose keys are each value in the array, and whose values
// are the number of occurances of each key
// ex
// > getCount([6, 7, 4, 4])
// {6: 1, 7: 1, 4: 2}











})();
