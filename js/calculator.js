"use strict";
(function () {
    //variables
    var buttons = document.getElementsByClassName("button");
    var operators = document.getElementsByClassName("operator");
    var clears = document.getElementById("clear");
    var equal = document.getElementById("equals");
    var firsttxt = document.getElementById("firsttxt");
    var secondtxt = document.getElementById("secondtxt");
    var thirdtxt = document.getElementById("thirdtxt");
    var negative=document.getElementById("negatives");
    var percentage=document.getElementById("percentages");




    //get buttons to write in each box
    var listener = function () {

        //get pi to write into boxes
        if(!this.hasAttribute("data")) {

            if (secondtxt.value == "") {
                firsttxt.value += this.innerHTML;
            } else {
                thirdtxt.value += this.innerHTML;
            }
        } else{

            if (secondtxt.value == "") {
                firsttxt.value += this.getAttribute("data");
            } else {
                thirdtxt.value += this.getAttribute("data");
            }
        }


    };

    //gets operators to write to middle text box
    var listenOp = function () {
        secondtxt.value += this.innerHTML;
    };
    //clear function
    var clearCalc = function () {
        firsttxt.value = "";
        secondtxt.value = "";
        thirdtxt.value = "";
    };

    //equal button functionality for each operator
    var calculate = function () {
        var value1 = parseFloat(firsttxt.value);
        var value2 = parseFloat(thirdtxt.value);
        if (secondtxt.value == "*") {
            var result = value1 * value2;
            firsttxt.value = result;
            secondtxt.value = "";
            thirdtxt.value = "";
        }
        if (secondtxt.value == "/") {
            //dividing by zero
            if (value2 == "0") {
                var nope = "Can't divide by 0!";
                firsttxt.value = nope;
                secondtxt.value = "";
                thirdtxt.value = "...You dummy";
            } else {
                var result = value1 / value2;
                firsttxt.value = result;
                secondtxt.value = "";
                thirdtxt.value = "";
            }
        }
        if (secondtxt.value == "+") {
            var result = value1 + value2;
            firsttxt.value = result;
            secondtxt.value = "";
            thirdtxt.value = "";
        }
        if (secondtxt.value == "-") {
            var result = value1 - value2;
            firsttxt.value = result;
            secondtxt.value = "";
            thirdtxt.value = "";
        }

    };

    //negative button functionality
    var neg=function(){
        if((firsttxt.value !== "") && (thirdtxt.value=="")){
            firsttxt.value *= -1;
        }
        if (thirdtxt.value !== ""){
            thirdtxt.value *= -1;
        }
    };

    //percentage functionality
    var perc=function() {
        if((firsttxt.value !== "") && (thirdtxt.value=="")) {
            var m = parseFloat(firsttxt.value);
            m /= 100;
            firsttxt.value = m
        }
        if(thirdtxt.value !==""){
            var m = parseFloat(thirdtxt.value);
            m /= 100;
            thirdtxt.value= m;
        }
    };




    //get clear, equal, negative and percentage buttons working
    clears.addEventListener('click', clearCalc, false);
    equal.addEventListener('click', calculate, false);
    negative.addEventListener('click',neg,false);
    percentage.addEventListener('click',perc,false);


    //gets all number buttons working
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', listener, false);
    }

    //get operator buttons working
    for (var j = 0; j < operators.length; j++) {
        operators[j].addEventListener('click', listenOp, false);
    }




})();
