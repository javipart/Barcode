function begin(){
    let re = /9[1-9][0-9]{3}[0-9]{10}/;
    let initialV = document.getElementById("initialValue").value;
    let quantityV = document.getElementById("quantityValues").value;
    clean();
    let variantNumber = parseInt(initialV.substr(5,10));
    let zero = '0';
    if(re.test(initialV)) {
        if(variantNumber + parseInt(quantityV) > 9999999999) {
            alert('!ERROR¡ La cantidad de valores excede el numero permitido');
        }
        else{
            for(let i = 1; i <= quantityV; i++){
                variantNumber += 1;
                let variantNumberStr = zero.repeat(10 - variantNumber.toString().length) + variantNumber.toString();
                let result = initialV.substr(0,5) + variantNumberStr;
                let addDigits = multiplyDigits(result);
                let controlDigit = findLastDigit(addDigits);
                let row = "<tr><td>" + i + "</td><td>" + result + controlDigit + "</td></tr>";
                let barcode = document.createElement("tr");
                barcode.innerHTML = row;
                document.getElementById("table").appendChild(barcode);
            }
        }
    }
    else{
        alert('¡ERROR! No es una cadena valida');
    }
}

function multiplyDigits(initialV){
    let digits = initialV.split('');
    let add = 0;
    let mul = 0;
    for(let i = 0; i < digits.length; i++){
        if(i%2 == 0){
            mul = digits[i]*2;
            let digitsI = (mul.toString()).split('');
            if(digitsI.length > 1){
                for(let j = 0; j < digitsI.length; j++){
                    add += parseInt(digitsI[j]);
                }
            }
            else{
                add += mul;
            }
            
        }
        else{
            mul = digits[i]*1;
            add += mul;
        }
    }
    return add;
}

function findLastDigit(sum){
    let rest = sum % 10;
    let controlDigit = 0;
    if(rest != 0){
        controlDigit = 10 - rest;
    }
    else{
        controlDigit = rest;
    }
    return controlDigit;
}

function onlyNumbers(e){
    let key = (e.which) ? e.which : e.keyCode;
    if(key >= 48 && key <= 57){
        return true;
    }
    else{
        return false;
    }
}

function clean(){
    document.getElementById("initialValue").value = "";
    document.getElementById("quantityValues").value = "";
    var Parent = document.getElementById("table");
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
}