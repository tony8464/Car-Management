const make = document.getElementById("make")
const model = document.getElementById("model")
const buyPrice = document.getElementById("buyPrice")
const estParts = document.getElementById("estParts")
const estLabor = document.getElementById("estLabor")
const estSell = document.getElementById("estSell")
const estProfit = document.getElementById("estProfit")
const saveButton = document.getElementById("saveButton")
const estimatedProfitOutput = document.getElementById("estimatedProfitOutput");
const form = document.forms["addCarForm"].elements;

/*getCarDataJSON();
async function getCarDataJSON() {
    const response = await fetch('cars.json')
    const carData = await response.carData
    document.getElementById('estimatedProfitOutput') = carData;

}*/
function checkForm() {
    let canSubmit = true;

    for (let i = 0; i < form.length && canSubmit; i++) {
        if (form[i].value.length == 0)
            canSubmit = false
    }
    document.getElementById("saveButton").disabled = !canSubmit;
}
function getEstProfit() {
    const estProf = estSell.value - estParts.value - estLabor.value - buyPrice.value
    estimatedProfitOutput.textContent = "$" + estProf;
}

const allInputs = [
    make,
    model,
    buyPrice,
    estParts,
    estLabor,
    estSell,
]

allInputs.forEach(function (input) {
    input.addEventListener("change", checkForm)
    input.addEventListener("keyup", checkForm)
    input.addEventListener("change", getEstProfit)
    input.addEventListener("keyup", getEstProfit)

})
/*
// this is how the Array.forEach method is implemented
function forEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        callbackFunction(array[i])
    }
}*/
const pages = ["0123", "234"]
//document.getElementById('add-car-page').style.display = 'none';
function showHidePage() {
    const pages = [document.getElementById('add-car-page'), document.getElementById('overview-page')];
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
} \


showHidePage();
/*
function showHide(d) {
    var onediv = document.getElementById(d);
    var divs = ['content1', 'content2', 'content3', 'content4'];
    for (var i = 0; i < divs.length; i++) {
        if (onediv != document.getElementById(divs[i])) {
            document.getElementById(divs[i]).style.display = 'none';
        }
    }
    onediv.style.display = 'block';
}
*/