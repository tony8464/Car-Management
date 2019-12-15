const overviewButton = document.getElementById("index-button");
const addCarButton = document.getElementById("add-car-button");
const overviewPage = document.getElementById("overview-page");
const addCarPage = document.getElementById("add-car-page");
const detailsButton = document.getElementById("details-button");
const detailsPage = document.getElementById("details-page");
const aboutButton = document.getElementById("about-button");
const aboutPage = document.getElementById("about-page");
const pageTitle = document.getElementById("page-title");

function deactivateAllPages() {
    overviewButton.classList.remove("active-button");
    addCarButton.classList.remove("active-button");
    detailsButton.classList.remove("active-button");
    aboutButton.classList.remove("active-button");
    overviewPage.classList.add("u-hidden");
    addCarPage.classList.add("u-hidden");
    detailsPage.classList.add("u-hidden");
    aboutPage.classList.add("u-hidden");
}
function activatePage(pageElement, buttonElement, pageTitle, pageURL) {
    deactivateAllPages()
    pageElement.classList.remove('u-hidden');
    buttonElement.classList.add('active-button');
    document.title = 'Car Appy | ' + pageTitle;
    history.pushState('', '', pageURL)
}

overviewButton.addEventListener("click", function () {
    activatePage(overviewPage, overviewButton, 'Overview', 'overview-page')
});
addCarButton.addEventListener("click", function () {
    activatePage(addCarPage, addCarButton, 'Add Car', 'add-car')
});
detailsButton.addEventListener("click", function () {
    activatePage(detailsPage, detailsButton, 'Details', 'details')
});
aboutButton.addEventListener("click", function () {
    activatePage(aboutPage, aboutButton, 'About', 'about')
});

function showInitialPage() {
    if (location.pathname === '/overview-page' || location.pathname === '/') {
        activatePage(overviewPage, overviewButton, 'Overview', 'overview-page')
    } else if (location.pathname === '/add-car') {
        activatePage(addCarPage, addCarButton, 'Add Car', 'add-car')
    } else if (location.pathname === '/details') {
        activatePage(detailsPage, detailsButton, 'Details', 'details')
    } else if (location.pathname === '/about') {
        activatePage(aboutPage, aboutButton, 'About', 'about')
    }
}

showInitialPage()
