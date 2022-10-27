"use strict";

window.onload = function(){
   const submitBtn = document.getElementById("submit");
   submitBtn.onclick = calculateCosts;

   //here, the radiobox being checked is the same as clicking a button
   let checkedCup = document.getElementById("cup");
   checkedCup.onclick = hideOrShowDiv;
}

function hideOrShowDiv(){
    //find the radio box input and test if it has been pressed
    let checkedCup = document.getElementById("cup").checked;
    let displayDiv = document.getElementById("press");

    //display the <div> if the radiobox is pressed
    if(checkedCup ){
        displayDiv.style.display = "block";
    }
    //hide the <div> ; how?
    else {
        displayDiv.style.display = "none";
    }
}
function calculateCosts(){
    //get the # of scoops
    const getScoops = parseInt(document.getElementById("numOfScoops").value);
    const message = document.getElementById("error");   //have an error message
    //find and test the 4 checkboxes
    const getSprinkles = document.getElementById("sprinkles").checked;   
    const getCream = document.getElementById("cream").checked;   
    const getFudge = document.getElementById("fudge").checked;  
    const getCherry = document.getElementById("cherry").checked;

    //return values
    const returnTotal = document.getElementById("totalDue");
    const returnTax = document.getElementById("tax");
    const returnBase = document.getElementById("basePrice");

    //computing variables
    let scoopPrice = 2.25;  //price for 1
    let tax = 0.08; //8% tax, why not?  
    let toppings = 0;
    //test # of scoops; add $1.25 for each additional; 1 is $2.25
    //I can't seem to get my validation attributes wroking, so'll add error messages here
    if(getScoops > 4 || getScoops < 1){
        message.innerHTML = "1, 2, 3, 4 scoops are ONYL allowed";
        return;
    }
    //since values > 4 and values < 1 have been tested, the 2, 3,4 are test
    else if(getScoops != 1 ){
        scoopPrice += ( getScoops-1 ) * 1.25;   //1 represents the first scoop;
        message.innerHTML = "";
    }

    //test the 4 toppings
    if(getSprinkles){
        toppings += 0.5;
    }
    if(getCream || getCherry){
        toppings += 0.25;
    }
    if(getFudge){
        toppings += 1.25;
    }
    if(getCherry && getCream){
        toppings += 0.5;
    }

    let total = (scoopPrice * tax) + scoopPrice + toppings;
    returnBase.innerHTML = `$${scoopPrice.toFixed(2)}`;
    returnTax.innerHTML = `$${tax*100}%`;
    returnTotal.innerHTML = `$${total.toFixed(2)}`;
    //test if checkboxes were checked, if so, increase the total cost & tax
}