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
