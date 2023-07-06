const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const port = 3001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "ThisIsASecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, // expires after 24h
    },
  })
);

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scooteq",
});

app.get("/", (req, res) => {
  res.json("hello from the other side!");
});

// define routes to fetch 'scooters' table
app.get("/scooters", (req, res) => {
  const sqlFetch = "SELECT * FROM scooters";
  db.query(sqlFetch, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// fetch prices
app.get("/prices", (req, res) => {
  const sqlFetch = "SELECT * FROM prices";
  db.query(sqlFetch, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// login and register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/ password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist!" });
      }
    }
  );
});

// start the server
app.listen(port, () => {
  console.log(`Connected to backenend on port ${port}`);
});
