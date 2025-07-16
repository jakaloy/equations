const sizeInpt = document.getElementById('buttonSize');
const barrelInpt = document.getElementById('barrelID');
const grooveInpt = document.getElementById('grooveOD');
const constInpt = document.getElementById('C');
const enterBtn = document.getElementById('enter');
const resultDiv = document.getElementById('result');
const clearBtn = document.getElementById('clear');

enterBtn.addEventListener('click', () => {
    let size = parseFloat(sizeInpt.value);
    let barrelID = parseFloat(barrelInpt.value);
    let grooveOD = parseFloat(grooveInpt.value);
    let constant = parseFloat(constInpt.value);
    clearBtn.classList.remove('displaynone');

    if (size === 0 || isNaN(size)){
        size = barrelID + ((grooveOD - barrelID) * constant);
        resultDiv.textContent = size.toFixed(5);
    }
    else if (constant === 0 || isNaN(constant){
        constant = (size - barrelID)/(grooveOD - barrelID);
        resultDiv.textContent = size.toFixed(7);
});

clearBtn.addEventListener('click', () => {
    sizeInpt.value = '';
    barrelInpt.value = '';
    grooveInpt.value = '';
    resultDiv.textContent = '';
    clearBtn.classList.add('displaynone');
});

sizeInpt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        enterBtn.click();
    }
});

barrelInpt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        enterBtn.click();
    }
});

grooveInpt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        enterBtn.click();
    }
});

constInpt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        enterBtn.click();
    }
});
