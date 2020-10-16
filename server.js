const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const connection = require("./config/connection")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/public')));
  //app.use(express.static("client/build"));
}
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});
  app.use(express.static(path.join(__dirname + "/client/build")));


 app.use(express.static(path.join(__dirname + '/client/build')));

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
