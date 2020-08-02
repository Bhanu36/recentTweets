const express = require("express");
const bodyParser = require("body-parser");
const noAuth = require("./routes/twit");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", noAuth);



app.listen(3001, () => {
    console.log("server listening on port 3001");
  });
  
