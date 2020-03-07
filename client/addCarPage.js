import { carForm } from "./carForm.js"

const addCarPageNode = document.querySelector("#add-car-page")

async function saveCar(car) {
  const resp = await fetch("/api/car", {
    method: "POST",
    body: JSON.stringify(car)
  })
  alert("saved your car. you should be glad")
}

carForm(addCarPageNode, "add-new", saveCar)
