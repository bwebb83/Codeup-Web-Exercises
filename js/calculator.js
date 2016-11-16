"use strict";
(function() {
    var listener= function(){
        console.log("You pushed " +  this.innerHTML);
    };

    var buttons=document.getElementsByClassName("button");
    var operators=document.getElementsByClassName("operator");



    //get clear and equal buttons working
    document.getElementById('clear').addEventListener('click', listener, false);
    document.getElementById('equals').addEventListener('click', listener, false);



    //gets all number buttons working
for( var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', listener, false);

}

    //get operator buttons working
for(var j=0; j<operators.length; j++){
    operators[j].addEventListener('click', listener, false);
}



})();
