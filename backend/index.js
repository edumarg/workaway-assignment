const express = require("express");
const cors = require("cors");
const app = express();

require("./db")();
const users = require("./userRoute");

app.use(cors());
app.use(express.json());
app.use(users);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
