function updatecaseNumber(isIncrese){
    const caseField = document.getElementById('case-number-field');
    const fieldValueString = caseField.value;
    const previouscaseNumber = parseInt(fieldValueString);

    let newcaseNumber;
    if(isIncrese === true){
        newcaseNumber = previouscaseNumber + 1;
    }
    else{
        newcaseNumber = previouscaseNumber - 1;
    }
    caseField.value = newcaseNumber;
    return newcaseNumber;
}
 


function steValue(caseTotal){
    const priceElement = document.getElementById('case-price-total');
    priceElement.innerText = caseTotal;
}

document.getElementById('case-plus-btn').addEventListener('click',function(){
    const newcaseNumber = updatecaseNumber(true);
    const caseTotal = newcaseNumber * 59;
   price();

    steValue(caseTotal)
    
})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    const newcaseNumber = updatecaseNumber(false);
    const caseTotal = newcaseNumber * 59;
    price();

   steValue(caseTotal)
})