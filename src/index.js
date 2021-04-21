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