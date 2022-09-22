const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("customer name: Adan");
});

myEmitter.on("newSale", (stock) => {
  console.log(stock + " " + "left");
});

myEmitter.emit("newSale", 9);

/////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
    console.log("Another Request");
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
