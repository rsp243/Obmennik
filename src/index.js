let listOfCoins = { 
    "exchangeDirections": ["Ravencoin (RVN)", "Ergo (ERG)", "Monero (XMR)", "ZCash (ZEC)", "Tether TRC20 (USDT TRC20)", "Sber (RUB)"]
}

for (let i = 0; i < listOfCoins['exchangeDirections'].length; i++){
    let value = listOfCoins['exchangeDirections'][i].slice(listOfCoins['exchangeDirections'][i].indexOf('(') + 1, listOfCoins['exchangeDirections'][i].length - 1)
    $('.menuTake').clone().appendTo($('#take')).attr("class", 'menuTake' + i).text(listOfCoins['exchangeDirections'][i]).attr('value', value).css('display', '')
    $('.menuGive').clone().appendTo($('#give')).attr("class", 'menuGive' + i).text(listOfCoins['exchangeDirections'][i]).attr('value', value).css('display', '')
}

$('#take').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        console.log(sl1)
    }
})

$('#give').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        console.log(sl1)
    }
})

$('#validationServer01').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    let count = document.getElementById('validationServer01').value;
    if (takeCoin != '' && giveCoin != '' && count != ''){  
        count = Number(count)
        if (isNaN(count)){
            $('#error').text('Введите корректные данные!')
        } else {
            $('#error').text('')
            sl2 = JSON.stringify({"amount": Number(count)})
            console.log(sl2)
        }
        
    }
})