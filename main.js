const make = document.getElementById("make")
const model = document.getElementById("model")
const buyPrice = document.getElementById("buyPrice")
const estParts = document.getElementById("estParts")
const estLabor = document.getElementById("estParts")
const estSell = document.getElementById("estSell")
const estProfit = document.getElementById("estProfit")
const saveButton = document.getElementById("saveButton")
const estimatedProfitOutput = document.getElementById("estimatedProfitOutput");

if (make.value == '' & model.value ==''){
saveButton.disabled = true
}
function getEstProfit(){    
    const estProf = estSell.value - estParts.value - estLabor.value - buyPrice.value
    estimatedProfitOutput.textContent = estProf;
}
saveButton.addEventListener("click", getEstProfit)