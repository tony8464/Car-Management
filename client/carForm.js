function getTemplate(id) {
  return `
<div class="container">
                <hr>
                <div class="addCarForm">
                    <div class="leftSide">
                        <form name="addCarForm">
                            <div class="data">
                                <label for="make">Make</label>
                                <input type="make" id="make-${id}">
                            </div>
                            <div class="data">
                                <label for="model">Model</label>
                                <input type="model" id="model">
                            </div>
                            <div class="data">
                                <label for="buyPrice">Buy Price</label>
                                <input type="number" id="buyPrice">
                            </div>
                            <div class="data">
                                <label for="estParts">Estimated Parts Cost</label>
                                <input type="number" id="estParts">
                            </div>
                            <div class="data">
                                <label for="estLabor">Estimated Labor Cost</label>
                                <input type="number" id="estLabor">
                            </div>
                            <div class="data">
                                <label for="estSell">Estimated Sell Price</label>
                                <input type="number" min="3000" id="estSell">
                            </div>
                        </form>
                    </div>
                    <div class="rightSide">
                        <div class="data">
                            <label for="estSellDate">Estimated Sell Date</label>
                            <input type="date" id="estSellDate">
                        </div>

                    </div>
                </div>
                <hr>
                <div class="dataEstProfit">
                    <div class="estProfit" id="estProfit">Estimated Profit:</div>
                    <div id="estimatedProfitOutput"></div>
                </div>
                <hr>
                <div class="saveButtonContainer">
                    <div class="saveButton">
                        <button type="submit" class="button" id="saveButton-${id}">Save</button>
                    </div>
                </div>
              </div>`
}

export function carForm(mountNode, id, onSave) {
  mountNode.innerHTML = getTemplate(id)
  const make = mountNode.querySelector(`#make-${id}`)
  const model = mountNode.querySelector("#model")
  const buyPrice = mountNode.querySelector("#buyPrice")
  const estParts = mountNode.querySelector("#estParts")
  const estLabor = mountNode.querySelector("#estLabor")
  const estSell = mountNode.querySelector("#estSell")
  const estProfit = mountNode.querySelector("#estProfit")

  const saveButton = mountNode.querySelector(`#saveButton-${id}`)
  const estimatedProfitOutput = mountNode.querySelector(
    "#estimatedProfitOutput"
  )
  const form = mountNode.querySelector("form")

  function checkForm() {
    let canSubmit = true
    for (let i = 0; i < form.length && canSubmit; i++) {
      if (form[i].value.length == 0) canSubmit = false
      if (!form[i].validity.valid) canSubmit = false
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

  saveButton.addEventListener("click", function() {
    onSave({
      make: make.value,
      model: model.value,
      buyPrice: buyPrice.value,
      estimatedPartsCost: estParts.value,
      estimatedLaborCost: estLabor.value,
      estimatedSellPrice: estSell.value
    })
  })
}
