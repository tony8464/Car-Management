const fs = require("fs")

function getCarData(callback) {
  fs.readFile("./data/cars.json", "utf8", function(err, data) {
    if (err) {
      console.error("Unable to read the cars.json file ", err)
    }
    callback(err, data)
  })
}

function getNextId(cars) {
  let maxId = -1
  cars.forEach(function(car) {
    if (car.id > maxId) {
      maxId = car.id
    }
  })
  return maxId + 1
}

function addCar(car, callback) {
  /**
   * add `car` to `car.json` file
   */
  getCarData(function(err, allCarsString) {
    if (err) {
      console.log("unable to read cars when trying to add a new car")
      callback(err)
      return
    }
    const allCars = JSON.parse(allCarsString)
    car.id = getNextId(allCars)
    allCars.push(car)

    fs.writeFile("./data/cars.json", JSON.stringify(allCars, null, 2), function(
      err
    ) {
      if (err) {
        callback(err)
        return
      }
      callback(null, car.id)
    })
  })
}

module.exports = {
  getCarData: getCarData,
  addCar: addCar
}
