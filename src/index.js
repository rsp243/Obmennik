$('#validationServer01').on('blur', function() {
    let takeCoin = document.getElementById('take').value;
    let giveCoin = document.getElementById('give').value;
    let count = document.getElementById('validationServer01').value;
    if (takeCoin != '' && giveCoin != ''){  
        sl = JSON.stringify({"coinName": takeCoin, "receiveName": giveCoin})
        console.log(sl)
    }
})