const make = document.getElementById("make")
const model = document.getElementById("model")
const buyPrice = document.getElementById("buyPrice")
const estParts = document.getElementById("estParts")
const estLabor = document.getElementById("estParts")
const estSell = document.getElementById("estSell")
const estProfit = document.getElementById("estProfit")
const saveButton = document.getElementById("saveButton")
const estimatedProfitOutput = document.getElementById("estimatedProfitOutput");
const form = document.forms["addCarForm"].elements;

function checkForm(){
let canSubmit = true;

for (let i = 0; i < form.length; i++) {
    if (form[i].value.length == 0)
        canSubmit = false
}
document.getElementById("saveButton").disabled = !canSubmit;
}
function getEstProfit(){    
    const estProf = estSell.value - estParts.value - estLabor.value - buyPrice.value
    estimatedProfitOutput.textContent = "$" + estProf;
}
make.addEventListener("change", checkForm)
make.addEventListener("keyup", checkForm)
model.addEventListener("change", checkForm)
model.addEventListener("keyup", checkForm)
buyPrice.addEventListener("change", checkForm)
buyPrice.addEventListener("keyup", checkForm)
buyPrice.addEventListener("change", getEstProfit)
buyPrice.addEventListener("keyup", getEstProfit)
estParts.addEventListener("change", checkForm)
estParts.addEventListener("keyup", checkForm)
estParts.addEventListener("change", getEstProfit)
estParts.addEventListener("keyup", getEstProfit)
estLabor.addEventListener("change", checkForm)
estLabor.addEventListener("keyup", checkForm)
estLabor.addEventListener("change", getEstProfit)
estLabor.addEventListener("keyup", getEstProfit)
estSell.addEventListener("change", checkForm)
estSell.addEventListener("keyup", checkForm)
estSell.addEventListener("change", getEstProfit)
estSell.addEventListener("keyup", getEstProfit)
