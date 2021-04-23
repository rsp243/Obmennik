let listOfCoins = { 
    "exchangeDirections": ["Ravencoin (RVN)", "Ergo (ERG)", "Monero (XMR)", "ZCash (ZEC)", "Tether TRC20 (USDT TRC20)", "Sber (RUB)"]
}

let picked = {
    "coinName": "RVN",
    "receiveName": "RUB",
    "minAmount": 60.57142857142858,
    "price": 12.590899999999998,
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
        $.ajax({
            type: "POST",
            url: '127.0.0.1:80',
            data: sl1,
            success: function(){
                alert('Произошла выгрузка данных')
            },
        });
        console.log(sl1)
    }
})



$('#give').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        $.ajax({
            type: "POST",
            url: '127.0.0.1:80',
            data: sl1,
            success: function(){
                alert('Произошла выгрузка данных')
            },
        });
        let coinName = document.getElementById('take').value;
        let recieveName = document.getElementById('give').value;
        if (coinName === picked['coinName'] && recieveName === picked['receiveName']){
            $('#min').text($('#min').text() + ' ' + picked['minAmount'])
            $('#rate').text($('#rate').text() + ' 1 ' + coinName + ' = ' + String(picked['price']))
        }
    }
})

$('#email').on('blur', function() {
    let email = document.getElementById('email').value;
    if (email.indexOf('@') === -1 || email.slice(email.indexOf('@')).indexOf('.') === -1){
        $('#email').css('border-color', 'red')
        $('#emailError').text('Введите корректную электронную почту')
    } else {
        $('#email').css('border-color', '')
        $('#emailError').text('')
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
            $.ajax({
                type: "POST",
                url: '127.0.0.1:80',
                data: sl2,
                success: function(){
                    alert('Произошла выгрузка данных')
                },
            });
        }
        
    }
})


let cardInput = myform.cardcode;

for (var i in ['input', 'change', 'blur', 'keyup']) {
    cardInput.addEventListener('input', formatCardCode, false);
}

function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}