const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8099"
};

app.use(cors(corsOptions));

const db = require("./models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.status(209)
    res.json({ message: "Welcome to App testing lessons." })
});

require("./routes/tutorial.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8098;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});