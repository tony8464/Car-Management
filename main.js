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
const notFoundPageNode = document.getElementById("not-found")

/*getCarDataJSON();
async function getCarDataJSON() {
    const response = await fetch('cars.json')
    const carData = await response.carData
    document.getElementById('estimatedProfitOutput') = carData;

}*/
function checkForm() {
  let canSubmit = true

  for (let i = 0; i < form.length && canSubmit; i++) {
    if (form[i].value.length == 0) canSubmit = false
  }
  document.getElementById("saveButton").disabled = !canSubmit
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

// stores the node for the current page
let activePage

/**
 * updates the `activePage`
 * @param {HTMLElement} node node to display
 * @param {string} name name of current page (will be shown in browser tab title)
 * @param {'push'|'replace'} [action] what to do to the `history` log
 * @param {string} [href] URL added to the `history` log
 */
function setActivePage(node, name, action, href) {
  if (activePage) {
    // hide current page
    activePage.classList.add("u-hidden")
  }
  // show current page
  node.classList.remove("u-hidden")
  // update title shown in the browser tab
  document.title = `${name} | Car Management`
  if (action === "push") {
    // add entry to the history log
    history.pushState("", "", href)
  } else if (action === "replace") {
    // replace current entry in the history log
    history.replaceState("", "", href)
  }
  // set `activePage` to the new `node`
  activePage = node
}

/**
 * returns the element that contains the page
 * @param {string} href path of the page we are trying to load
 */
function getPageNode(href) {
  return document.querySelector(`[data-page="${href}"]`)
}

document.querySelectorAll("nav li a").forEach(function(anchorTag) {
  const href = anchorTag.getAttribute("href")
  const name = anchorTag.textContent
  const pageNode = getPageNode(href)
  // if the link is the current page, set it to the active page
  if (href === location.pathname) {
    setActivePage(pageNode, name)
  }
  anchorTag.addEventListener("click", function(event) {
    event.preventDefault()
    setActivePage(pageNode, name, "push", href)
  })
})

// if none of the links match exactly to the current URL
if (!activePage) {
  // if it is `/index.html` or `/` default to `/home`
  if (location.pathname === "/index.html" || location.pathname === "/") {
    const homeHref = "/home"
    const homePageNode = getPageNode(homeHref)

    // set the active page to home, REPLACING the current history entry
    setActivePage(homePageNode, "Overview", "replace", homeHref)
  } else {
    // otherwise show the not found page
    setActivePage(notFoundPageNode, "Not Found")
  }
}

// listen for hitting the browser back or forward buttons
window.addEventListener("popstate", function(event) {
  // prevent browser from reloading the page
  event.preventDefault()
  const href = location.pathname
  const node = getPageNode(href)
  const name = document.querySelector(`nav li a[href="${href}"]`).textContent
  setActivePage(node, name)
})

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
