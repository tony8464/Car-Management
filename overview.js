const carTable = document.querySelector('#car-table')
const hideSoldCarsCheckbox = document.getElementById('hide-sold-cars')
const makeSelect = document.getElementById('make-select')

let carData = []

function showElement(element) {
    element.classList.remove('u-hidden')
}
function hideElement(element) {
    element.classList.add('u-hidden')
}
function removeAllRows() {
    const allRows = carTable.querySelectorAll('tr')
    allRows.forEach(function (trElement) {
        trElement.remove()
    })
}

function isCarFilteredOut(car) {
    if (car.status === 'sold' && hideSoldCarsCheckbox.checked) {
        return true
    } else if (car.make !== makeSelect.value && makeSelect.value !== 'all') {
        return true
    } else {
        return false
    }
}

function renderCarRow(car) {
    const shouldSkipCar = isCarFilteredOut(car)
    if (shouldSkipCar === true) {
        return
    }
    const row = document.createElement('tr')

    // make column
    const makeColumn = document.createElement('td')
    makeColumn.textContent = car.make
    row.appendChild(makeColumn)

    // model column
    const modelColumn = document.createElement('td')
    modelColumn.textContent = car.model
    row.appendChild(modelColumn)

    // buy price column
    const buyPriceColumn = document.createElement('td')
    buyPriceColumn.textContent = car.buyPrice
    row.appendChild(buyPriceColumn)
    // status column
    const statusColumn = document.createElement('td')
    statusColumn.textContent = car.status
    row.appendChild(statusColumn)


    carTable.appendChild(row)
}


getCarDataJSON();
async function getCarDataJSON() {
    const response = await fetch('cars.json')
    carData = await response.json()
    renderRows()

    const makeOptions = []
    carData.forEach(function (car) {
        // "!" negates the stuff to the right of it - makes it opposite
        if (!makeOptions.includes(car.make)) {
            makeOptions.push(car.make)
        }
    })

    makeOptions.forEach(addMakeOption)
}

function addMakeOption(make) {
    const option = document.createElement('option')
    option.textContent = make
    option.setAttribute('value', make)

    makeSelect.appendChild(option)
}

function renderRows() {
    carData.forEach(renderCarRow)
}

function reRenderRows() {
    removeAllRows()
    renderRows()
}

makeSelect.addEventListener('change', reRenderRows)
hideSoldCarsCheckbox.addEventListener('change', reRenderRows)
