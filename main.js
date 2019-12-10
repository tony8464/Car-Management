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

const overviewButton = document.getElementById("index-button");
const addCarButton = document.getElementById("add-car-button");
const overviewPage = document.getElementById("overview-page");
const addCarPage = document.getElementById("add-car-page");

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

function activateAddCarPage() {
    overviewPage.style.display = "none";
    addCarPage.style.display = "flex";
}
function activateOverviewPage() {
    overviewPage.style.display = "flex";
    addCarPage.style.display = "none";
}

overviewButton.addEventListener("click", activateOverviewPage)
addCarButton.addEventListener("click", activateAddCarPage)



/*
// this is how the Array.forEach method is implemented
function forEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        callbackFunction(array[i])
    }


function showHidePage() {
    const pages = [document.getElementById('add-car-page'), document.getElementById('overview-page')];
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[1].style.display = 'flex';
}


showHidePage();
const addCar = document.getElementById("add-car-button");
document.addEventListener
*/