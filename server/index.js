const http = require("http")
const car = require("./car")

const port = 8888

function handleRequest(req, res) {
  if (!req.url.startsWith("/api/car")) {
    res.writeHead(400)
    res.write(`Unexpected URL: ${req.url}`)
    console.log("bad request!")
    res.end()
    return
  }
  if (req.method === "GET") {
    car.getCarData(function(err, data) {
      if (err) {
        res.writeHead(500, "unable to load cars")
        res.end()
        return
      }
      res.write(data)
      res.end()
    })
  } else if (req.method === "POST") {
    let data = ""

    req.on("data", function(chunk) {
      data = data + chunk
    })

    req.on("end", function() {
      car.addCar(JSON.parse(data), function(err, id) {
        if (err) {
          res.writeHead(500, "unable to add car, soo sorry")
          res.end()
          return
        }
        res.writeHead(200)
        res.write(JSON.stringify({ id: id }))
        res.end()
      })
    })
  }
}

//create a server object:
const httpServer = http.createServer(handleRequest)

//the server object listens on port 8080
httpServer.listen(port)

console.log(`API server started on http://localhost:${port}`)
