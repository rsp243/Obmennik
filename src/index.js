$('#validationServer01').on('focus', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl1 = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        console.log(sl1)
    }
    $('#validationServer01').on('blur', function() {
    let count = document.getElementById('validationServer01').value;
    if (takeCoin != '' && giveCoin != '' && count != ''){  
        sl2 = JSON.stringify({"payment": Number(count)})
        console.log(sl2)
    }
})
})

