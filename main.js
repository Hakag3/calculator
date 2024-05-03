function setNumber(number) {
    let resultString = document.getElementById('display');
    let currentText = resultString.innerText;
    resultString.innerText = currentText + number

}
function clearDisplay() {
    let resultString = document.getElementById('display');
    resultString.innerText = 0
}

function calculate() {
    let resultString = document.getElementById('display');
    resultString.innerText = eval(resultString.innerText);
       
}
    


function getProcent() {
    let resultString = document.getElementById('display');
    resultString.innerText = eval(eval(resultString.innerText) / 100);
        
    }




function setDinamicNumber() {
    let resultString = document.getElementById('display');
    let number = parseFloat(resultString.innerText);
    number = -number;
    resultString.innerText = number.toString();
}

