const express = require("express");
const cors = require("cors");
const app = express();
const config = require("config");

require("./db")();
const users = require("./userRoute");

app.use(cors());
app.use(express.json());
app.use(users);

if (!config.get("jwtPrivateKey")) {
  throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
}

//Change  hardcode  port "9000"  by config.get("port")

const PORT = process.env.PORT || config.get("port");
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
