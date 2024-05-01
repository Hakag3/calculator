function setNumber(number) {
    let resultString = document.getElementById('display');
    let currentText = resultString.textContent;
    resultString.innerText = currentText + number

}
function clearDisplay() {
    let resultString = document.getElementById('display');
    resultString.innerText = ''
}

function calculate() {
    let resultString = document.getElementById('display');
    resultString.innerText = eval(resultString.innerText);



}

