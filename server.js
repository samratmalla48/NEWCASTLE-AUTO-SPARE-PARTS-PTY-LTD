const express = require("express");
// rest object
const app = express();
// rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to ecommerce app",
  });
});
const PORT = 8080;
app.listen(PORT,() => {
  console.log('running on port ${PORT}');
});
