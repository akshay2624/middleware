const express = require("express");
const app = express();

const { nw , hdng } = require("./middlewear");

app.use(nw);
app.get("/", hdng, nw, (req, res) => {
    res.send({data: "hey"});
});
app.listen(8000, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("listening on port 8000");
  });