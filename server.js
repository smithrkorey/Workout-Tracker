//dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;

//initalizing express
const app = express();

//middleware
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connecting to local database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//setup routes
//app.use(require("./routes/api-routes"));
require('./routes/api-routes')
//app.use(require("./routes/html-routes"));
require('./routes/html-routes')

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
