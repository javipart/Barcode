function begin(){
    let re = /9[1-9][0-9]{3}[0-9]{10}/;
    let initialV = document.getElementById("initialValue").value;
    let quantityV = document.getElementById("quantityValues").value;
    if(re.test(initialV)){
        alert('Coincide');
    }
    else{
        alert('No coincide');
    }
}