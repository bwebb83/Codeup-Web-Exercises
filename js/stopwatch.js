/**
 * Created by Brian on 11/15/16.
 */
"use strict";

(function(){

    //start timer
    function startTimer(){
    stopwatchInterval =  setInterval(function(){
           seconds += 1;
            display.innerHTML=seconds.toFixed(4);
        }, interval);
    }

    function stopTimer(){
        clearInterval(stopwatchInterval);
    }

    function resetTimer(){
        display.innerHTML=0;
        clearInterval(stopwatchInterval);
    }

    var seconds = 0;
    var stopwatchInterval;
    var interval = 1000;

    console.log(document.getElementById('start'));

   //three buttons
   var buttons ={
       start: document.getElementById('start'),
       stop: document.getElementById("stop"),
       reset: document.getElementById("reset"),
   };

    var display=document.getElementById("display");


    buttons.start.addEventListener("click", startTimer);
    buttons.stop.addEventListener("click", stopTimer);
    buttons.reset.addEventListener("click", resetTimer);
   //  identify my verbs
   // functionality for buttons
   //  add event listener







})();