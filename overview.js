const carTable = document.querySelector('#car-table')
const hideSoldCarsCheckbox = document.getElementById('hide-sold-cars')
const makeSelect = document.getElementById('make-select')

hideSoldCarsCheckbox.addEventListener('change', function () {
    const soldCars = getSoldCars()
    if (hideSoldCarsCheckbox.checked) {
        soldCars.forEach(hideElement)
    }
    else {
        soldCars.forEach(showElement)
    }
})
function showElement(element) {
    element.classList.remove('u-hidden')
}
function hideElement(element) {
    element.classList.add('u-hidden')
}
function getSoldCars() {
    return document.querySelectorAll('.car-sold')
}


function renderCarRow(car) {
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

    if (car.status === 'sold') {
        row.classList.add('car-sold')
    }
    row.classList.add('car-make-' + car.make)

    carTable.appendChild(row)
}


getCarDataJSON();
async function getCarDataJSON() {
    const response = await fetch('cars.json')
    const carData = await response.json()
    carData.forEach(renderCarRow)

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

makeSelect.addEventListener('change', function () {
    const allRows = carTable.querySelectorAll('tr')
    if (makeSelect.value === 'all') {
        allRows.forEach(showElement)
    } else {
        const expectedClass = 'car-make-' + makeSelect.value
        allRows.forEach(function (row) {
            if (row.classList.contains(expectedClass)) {
                showElement(row)
            } else {
                hideElement(row)
            }
        })
    }
})