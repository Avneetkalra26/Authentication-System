const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/auth", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  if (email === "example@gmail.com" && pass === "123456") {
    res.json(true);
  } else {
    res.json(false);
  }
  console.log(email);
  console.log(pass);
  res.json({ email, pass });
});

app.listen(4000, (res) => {
  console.log("listening on port");
});
