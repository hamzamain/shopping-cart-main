function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);
}
function price(){
    const caseprice = getTextValueById('case-price-total');
    const phonePrice = getTextValueById('iphone-price-total');
    const totalPrice = caseprice + phonePrice;
    const setTotal = document.getElementById('price-total');
    setTotal.innerText = totalPrice
}

function updateIphoneNumber(isIncrese){
    const IphoneField = document.getElementById('iphone-number-field');
    const fieldValueString = IphoneField.value;
    const previousIphoneNumber = parseInt(fieldValueString);

    let newIphoneNumber;
    if(isIncrese === true){
        newIphoneNumber = previousIphoneNumber + 1;
    }
    else{
        newIphoneNumber = previousIphoneNumber - 1;
    }
    IphoneField.value = newIphoneNumber;
    return newIphoneNumber;
}

document.getElementById('iphone-plus-btn').addEventListener('click',function(){
    const newIphoneNumber = updateIphoneNumber(true);

    const iphoneTotal = newIphoneNumber * 1219;
    price()

    const priceElement = document.getElementById('iphone-price-total');
    priceElement.innerText = iphoneTotal;
})
document.getElementById('iphone-minus-btn').addEventListener('click',function(){
    const newIphoneNumber = updateIphoneNumber(false);
    const iphoneTotal = newIphoneNumber * 1219;
    price();

    const priceElement = document.getElementById('iphone-price-total');
    priceElement.innerText = iphoneTotal;
})