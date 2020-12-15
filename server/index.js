const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt"); //allowwing hashing passwords in database when stored
const saltRounds = 10; //related to bcrypt to control how much time is needed to calculate a single bcrypt hash

const bodyParser = require("body-parser"); //parsing reg.body from frontend
const cookieParser = require("cookie-parser"); //parse all cookies
const session = require("express-session"); //creating session and maintain them

const jwt = require("jsonwebtoken"); //to make jason web tokens for authorization

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
); //allowing crossplatform sending data from frontend to backend

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID", //name of cookie
    secret: "secret", //secret usually has to be more advanced
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

//connecting to the database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "jordnaeryoga",
});

//Register
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const number = req.body.number;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO USERS (UserEmail, UserPassword, UserFirstName, UserLastName, UserPhone) VALUES (?,?,?,?,?)",
      [email, hash, firstname, lastname, number], //hashing password, so it wont be shown in the database
      (err, result) => {
        console.log(err);
      }
    );
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("We need a token");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "you failed to authenticate" });
      } else {
        req.userId = decoded.id; //so we dont need to verify, everytime there's made a request
        next();
      }
    });
  }
};

//verifyJWT is a middleware for user trying to reach endpoint, has the correct web token
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You're authenticated - congrats!");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM USERS WHERE UserEmail = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].UserPassword, (error, response) => {
        if (response) {
          const id = result[0].UserID; //getting id from the first user in the list
          const isAdmin = result[0].IsAdmin; //getting admin from the first user in the list
          const firstName = result[0].UserFirstName; //getting first name from the first user in the list
          const lastName = result[0].UserLastName; //getting last name from the first user in the list
          const phoneNumber = result[0].UserPhone; //getting phone number from the first user in the list
          const token = jwt.sign(
            { id, isAdmin, firstName, lastName, phoneNumber },
            "jwtSecret",
            {
              expiresIn: 300,
            }
          ); //make jwtSecret into a .env file and .env variable - the token is jwtSecret

          req.session.user = result;

          console.log(req.session.user);
          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong combination of username / password",
          }); //checking if password/email is correct
        }
      });
    } else {
      res.json({ auth: false, message: "No user exists" });
    }
  });
});

//Create Course
app.post("/createcourse", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const spaces = req.body.spaces;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const price = req.body.price;
  const picture = req.body.picture;
  const instructorNames = req.body.instructorNames;
  const address = req.body.address;

  db.query(
    "INSERT INTO COURSE (CourseTitle, CourseDescription, CourseSpaces, CourseStartDate, CourseEndDate, CoursePrice, CoursePicture, CourseInstructorNames, CreatedBy, CourseAddress) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      title,
      description,
      spaces,
      startDate,
      endDate,
      price,
      picture,
      instructorNames,
      1,
      address,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//User
app.get("/user/get", (req, res) => {
  const sqlSelect = "SELECT * FROM USERS";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//DELETE user
app.delete("/user/delete/:UserEmail", (req, res) => {
  const email = req.params.UserEmail;
  const sqlDelete = "DELETE FROM USERS WHERE UserEmail = ?"; //only one variable, so no need to create object
  db.query(sqlDelete, email, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

//Update user
app.put("/user/update", (req, res) => {
  const email = req.body.UserEmail;
  const password = req.body.Userpassword;
  const firstname = req.body.UserFirstName;
  const lastname = req.body.UserLastName;
  const phone = req.body.UserPhone;

  const sqlUpdate =
    "UPDATE USERS SET UserName = ?, UserPassword = ?, UserFirstName = ?, UserLastName = ?, UserPhone = ? WHERE UserEmail, UserPassword, UserFirstName, UserLastName, UserPhone = (?, ?, ?, ?, ?)";

  db.query(
    sqlUpdate,
    [email, password, firstname, lastname, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
