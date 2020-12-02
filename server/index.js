const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors()); //allowing crossplatform sending data from frontend to backend

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "JordnaerYoga",
});

//testing that server is running
app.get("/", (req, res) => {
  res.send("Hello world");
});

//Register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    " INSERT INTO USERS (UserEmail, UserPassword) VALUES (?,?)",
    [UserEmail, UserPassword],
    (err, result) => {
      console.log(err);
    }
  );
});

//login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE UserEmail = ? AND UserPassword = ?",
    [UserEmail, UserPassword],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
