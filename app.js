const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello Lab!!");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// serve your css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

//post

app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send(`Hello ${subName}! Thank you for subscribing. Your email is ${subEmail}.`);
});


app.listen(port, () => {
  console.log(`Lab app listening on port ${port}`);
});
