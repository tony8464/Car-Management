const make = document.getElementById("make")
const model = document.getElementById("model")
const buyPrice = document.getElementById("buyPrice")
const estParts = document.getElementById("estParts")
const estLabor = document.getElementById("estLabor")
const estSell = document.getElementById("estSell")
const estProfit = document.getElementById("estProfit")
const saveButton = document.getElementById("saveButton")
const estimatedProfitOutput = document.getElementById("estimatedProfitOutput")
const form = document.forms["addCarForm"].elements

function checkForm() {
  let canSubmit = true
  for (let i = 0; i < form.length && canSubmit; i++) {
    if (form[i].value.length == 0) canSubmit = false
  }
  saveButton.disabled = !canSubmit
}
function getEstProfit() {
  const estProf =
    estSell.value - estParts.value - estLabor.value - buyPrice.value
  estimatedProfitOutput.textContent = "$" + estProf
}

const allInputs = [make, model, buyPrice, estParts, estLabor, estSell]

allInputs.forEach(function(input) {
  input.addEventListener("change", checkForm)
  input.addEventListener("keyup", checkForm)
  input.addEventListener("change", getEstProfit)
  input.addEventListener("keyup", getEstProfit)
})

saveButton.addEventListener("click", async function() {
  const resp = await fetch("/api/car", {
    method: "POST",
    body: JSON.stringify({
      make: make.value,
      model: model.value,
      buyPrice: buyPrice.value,
      estimatedPartsCost: estParts.value,
      estimatedLaborCost: estLabor.value,
      estimatedSellPrice: estSell.value
    })
  })
  alert("saved your car. you should be glad")
})