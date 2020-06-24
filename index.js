const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const db = require("./config/keys.js").mongoURI;
mongoose
  .connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    console.log("Mongo Connect");
  })
  .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
