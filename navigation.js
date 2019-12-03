const overviewButton = document.getElementById("index-button");
const addCarButton = document.getElementById("add-car-button");
const overviewPage = document.getElementById("overview-page");
const addCarPage = document.getElementById("add-car-page");
const detailsButton = document.getElementById("details-button");
const detailsPage = document.getElementById("details-page");
const aboutButton = document.getElementById("about-button");
const aboutPage = document.getElementById("about-page");

function deactivateAllPages() {
    overviewButton.classList.remove("active-button");
    addCarButton.classList.remove("active-button");
    detailsButton.classList.remove("active-button");
    aboutButton.classList.remove("active-button");
    overviewPage.style.display = "none";
    addCarPage.style.display = "none";
    detailsPage.style.display = "none";
    aboutPage.style.display = "none";
}
deactivateAllPages()

function activateAddCarPage() {
    deactivateAllPages()
    addCarButton.classList.add("active-button")
    addCarPage.style.display = "flex";
}
function activateOverviewPage() {
    deactivateAllPages()
    overviewButton.classList.add("active-button");
    overviewPage.style.display = "flex";
}
function activateDetailsPage() {
    deactivateAllPages()
    detailsButton.classList.add("active-button")
    detailsPage.style.display = "flex"
}
function activateAboutPage() {
    deactivateAllPages();
    aboutButton.classList.add("active-button")
    aboutPage.style.display = "flex"
}
overviewButton.addEventListener("click", activateOverviewPage);
addCarButton.addEventListener("click", activateAddCarPage);
detailsButton.addEventListener("click", activateDetailsPage);
aboutButton.addEventListener("click", activateAboutPage);