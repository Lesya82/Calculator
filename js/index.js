function add(){
    var numberOne;
    var numberTwo;
numberOne = document.getElementById("nOne").value;
numberOne = parseInt(numberOne);
numberTwo = document.getElementById("nTwo").value;
numberTwo = parseInt(numberTwo);
    result = numberOne  + numberTwo;
    document.getElementById("out").innerHTML = result;
}

function subtract(){
    let numberOne;
    let numberTwo;
numberOne = document.getElementById("nOne").value;
numberOne = parseInt(numberOne);
numberTwo = document.getElementById("nTwo").value;
numberTwo = parseInt(numberTwo);
    result = numberOne - numberTwo;
    document.getElementById("out").innerHTML = result;
}

function multiply(){
    let numberOne;
    let numberTwo;
numberOne = document.getElementById("nOne").value;
numberOne = parseInt(numberOne);
numberTwo = document.getElementById("nTwo").value;
numberTwo = parseInt(numberTwo);
    result = numberOne * numberTwo;
    document.getElementById('out').innerHTML = result;
}

function divide(){
    let numberOne;
    let numberTwo;
numberOne = document.getElementById("nOne").value;
numberOne = parseInt(numberOne);
numberTwo = document.getElementById("nTwo").value;
numberTwo = parseInt(numberTwo);
if(numberTwo !== 0){
result = numberOne / numberTwo;
    document.getElementById("out").innerHTML = result;
} else {
    document.getElementById("out").innerHTML = "Division by 0";
}
}

