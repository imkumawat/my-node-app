const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Mr. Manoj Kumawat......!");
});
console.log("New update");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
