//best price 
const bestPrice = document.getElementById('best-price');

// Total Price
const totalPrice = document.getElementById('total-price');

//Grand Total Price
const grandTotalPrice = document.getElementById('grand-total');

// Extra Memory Price
const extraMemory = document.getElementById('exta-memory');

//extra SSD Card
const extraSSD = document.getElementById('extra-storage');

// extra delivery
const extraDelivery = document.getElementById('extra-delivery');

//pomo code 
const pomoInput = document.getElementById('pomo-input');


function getAllPrice(){
    const currBestPrice = parseInt(bestPrice.innerText);
    const currExtraMemory = parseInt(extraMemory.innerText);
    const currExtraSsd = parseInt(extraSSD.innerText);
    const currExtraDelivery = parseInt(extraDelivery.innerText);

    const total = currBestPrice+currExtraMemory+currExtraSsd+currExtraDelivery;
    return total;
}

function getPrice(){
    const priceTotal = getAllPrice();
    totalPrice.innerText = priceTotal;
    grandTotalPrice.innerText = priceTotal;
}

function memoryUpdate(gbId){
    if(gbId == 'gb8'){
        extraMemory.innerText = 0;
        getPrice();
    }else if('gb16'){
        extraMemory.innerText = 180;
        getPrice();
    }
}

function storageUpdate(ssdId){
    if (ssdId == 'ssd256'){
        extraSSD.innerText = 0;
        getPrice();
    }
    else if (ssdId == 'ssd512'){
        extraSSD.innerText = 100;
        getPrice();
    }
    else if (ssdId == 'ssd1T'){
        extraSSD.innerText = 180;
        getPrice();
    }
}

function delilveryUpdate(deliveryId){
    if (deliveryId == 'chargedelivery'){
        extraDelivery.innerText = 20;
        getPrice();
    }else if(deliveryId == 'free'){
        extraDelivery.innerText = 0;
        getPrice();
    }
}

//stevekaku

function applyPomo(code){
    if (code == 'stevekaku'){
        const grandPrice = getAllPrice();
        const discountPrice = (grandPrice * 20)/100;
        grandTotalPrice.innerText = grandPrice - discountPrice;
        pomoInput.value = "";
    }else{

    }
}

// extra memory cllickable function
document.getElementById('gb8').addEventListener('click',function(){
    memoryUpdate('gb8');
});
document.getElementById('gb16').addEventListener('click', function () {
    memoryUpdate('gb16');
});

// SSD Clickable Function
document.getElementById('ssd256').addEventListener('click', function () {
    storageUpdate('ssd256');
});
document.getElementById('ssd512').addEventListener('click', function () {
    storageUpdate('ssd512');
});
document.getElementById('ssd1T').addEventListener('click', function () {
    storageUpdate('ssd1T');
});

// Delivery Clickable Function
document.getElementById('chargedelivery').addEventListener('click', function () {
    delilveryUpdate('chargedelivery');
});
document.getElementById('free').addEventListener('click', function () {
    delilveryUpdate('free');
});

// apply pomo code clickable function
document.getElementById('pomo-btn').addEventListener('click', function () {
    const pomoCode = pomoInput.value;
    applyPomo(pomoCode);
});