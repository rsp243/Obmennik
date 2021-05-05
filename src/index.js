let firstReq = {"request": "exchange"}

$.ajax({
    type: "POST",
    url: 'http://127.0.0.1:80',
    data: firstReq,
    success: function(response){
        let listOfCoins = response
        for (let i = 0; i < listOfCoins.split(', ').length; i++){
            let value = listOfCoins.split(', ')[i].slice(listOfCoins.split(', ')[i].indexOf('(') + 1, listOfCoins.split(', ')[i].length - 1)
            $('.menuTake').clone().appendTo($('#take')).attr("class", 'menuTake' + i).text(listOfCoins.split(', ')[i]).attr('value', value).css('display', '')
            $('.menuGive').clone().appendTo($('#give')).attr("class", 'menuGive' + i).text(listOfCoins.split(', ')[i]).attr('value', value).css('display', '')
        }
    },
});

let picked = {
    "coinName": "RVN",
    "receiveName": "RUB",
    "minAmount": 60.57142857142858,
    "price": 12.590899999999998,
}



$('#take').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:80',
            data: sl1,
            success: function(response){
                console.log(response)
                let price = response.split(', ')[1]
                let minAmount = response.split(', ')[0]
                let coinName = document.getElementById('take').value;
                $('#min').text(String(minAmount) + ' ' + coinName)
                if (takeCoin === "USD" || takeCoin === "USDT TRC20" || takeCoin === "RUB") {
                    $('#rate').text(' 1 ' + giveCoin + ' = ' + String(price) + ' ' + coinName)
                } else {
                    $('#rate').text(' 1 ' + coinName + ' = ' + String(price) + ' ' + giveCoin)
                }
            },
        });
        let count = document.getElementById('validationServer01').value;
        if (count != '') {
            count = Number(count)
            if (isNaN(count) || count < Number($('#min').text().split(' ')[0])){
                $('#error').text('Введите корректные данные!')
            } else {
                $('#error').text('')
                sl2 = JSON.stringify({"amount": Number(count), "coinName": takeCoin, "receiveName": giveCoin})
                $.ajax({
                    type: "POST",
                    url: 'http://127.0.0.1:80',
                    data: sl2,
                    success: function(response){
                        console.log(response)
                        document.getElementById('validationServer02').value = response
                    },
                });
            }
        }
    }
})



$('#give').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:80',
            data: sl1,
            success: function(response){
                console.log(response)
                let price = response.split(', ')[1]
                let minAmount = response.split(', ')[0]
                let coinName = document.getElementById('take').value
                $('#min').text(String(minAmount) + ' ' + coinName)
                if (takeCoin === "USD" || takeCoin === "USDT TRC20" || takeCoin === "RUB") {
                    $('#rate').text(' 1 ' + giveCoin + ' = ' + String(price) + ' ' + coinName)
                } else {
                    $('#rate').text(' 1 ' + coinName + ' = ' + String(price) + ' ' + giveCoin)
                }
            },
        });
        let count = document.getElementById('validationServer01').value;
        if (count != '') {
            count = Number(count)
            if (isNaN(count) || count < Number($('#min').text().split(' ')[0])){
                $('#error').text('Введите корректные данные!')
            } else {
                $('#error').text('')
                sl2 = JSON.stringify({"amount": Number(count), "coinName": takeCoin, "receiveName": giveCoin})
                $.ajax({
                    type: "POST",
                    url: 'http://127.0.0.1:80',
                    data: sl2,
                    success: function(response){
                        console.log(response)
                        document.getElementById('validationServer02').value = response
                    },
                });
            }
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
        if (isNaN(count) && count < Number($('#min').text())){
            $('#error').text('Введите корректные данные!')
        } else {
            $('#error').text('')
            sl2 = JSON.stringify({"amount": Number(count), "coinName": takeCoin, "receiveName": giveCoin})
            $.ajax({
                type: "POST",
                url: 'http://127.0.0.1:80',
                data: sl2,
                success: function(response){
                    console.log(response)
                    document.getElementById('validationServer02').value = response
                },
            });
        }
    }
})

/*  
let cardInput = myform.cardcode;

for (var i in ['input', 'change', 'blur', 'keyup']) {
    cardInput.addEventListener('input', formatCardCode, false);
}

function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}
*/