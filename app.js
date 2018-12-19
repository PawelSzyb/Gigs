const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database");

const app = express();

// routes
app.use("/gigs", require("./routes/gigs"));

//Test db
db.authenticate()
  .then(() => console.log("connection established"))
  .catch(err => console.log("Something went wrong :" + err));

app.get("/", (req, res) => {
  res.send("INDEX");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server started at port ${PORT}`);
