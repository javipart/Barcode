function begin(){
    let re = /9[1-9][0-9]{3}[0-9]{10}/;
    let initialV = document.getElementById("initialValue").value;
    let quantityV = document.getElementById("quantityValues").value;
    let addDigits = multiplyDigits(initialV);
    let controlDigit = findLastDigit(addDigits);
    let variantNumber = parseInt(initialV.substr(5,10));
    if(re.test(initialV)) {
        if(variantNumber + quantityV > 9999999999) {
            alert('!ERROR¡ La cantidad de valores excede el numero permitido');
        }
        for(let i = 0; i < quantityV; i++){
            varianNumber += 1;
            let row = "<tr><td>" + i + "</td><td>" + variantNumber + "</td></tr>";
            let barcode = document.createElement("tr");
            barcode.innerHTML = row;
            document.getElementById("table").appendChild(barcode);
        }
        alert(variantNumber);
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