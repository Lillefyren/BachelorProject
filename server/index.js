const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt"); //allowwing hashing passwords in database when stored
const saltRounds = 10; //related to bcrypt to control how much time is needed to calculate a single bcrypt hash

const app = express();

app.use(express.json());
app.use(cors()); //allowing crossplatform sending data from frontend to backend

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "jordnaeryoga",
});

//Register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO USERS (UserEmail, UserPassword) VALUES (?,?)",
      [username, hash], //hashing password, so it wont be shown in the database
      (err, result) => {
        console.log(err);
      }
    );
  });
});

//login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE UserEmail = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "Wrong username or password" }); //checking if password/email is correct
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
