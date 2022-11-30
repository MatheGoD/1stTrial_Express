const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const { appDataSource } = require("./src/models/data-source");
const { routes } = require("./src/routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
const PORT = 3000;

const start = async () => {
  server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};

start();
