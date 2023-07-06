const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const port = 3001;

// database config
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "scooteq",
});

app.use(express.json());
app.use(cors())

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
  const sqlFetch = "SELECT * FROM prices"
  db.query(sqlFetch, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

// user inputs scooter
app.post("/scooters", (req, res) => {
  const sqlInsert =
    "INSERT INTO scooters (`brand`, `model`, `battery_level`, `is_rented`) VALUES (?)";
  const values = [
    req.body.brand,
    req.body.model,
    req.body.battery_level,
    req.body.is_rented,
  ];

  db.query(sqlInsert, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Successfully created!");
  });
});

// app.get("/", (req, res) => {});

// start the server
app.listen(port, () => {
  console.log(`Connected to backenend on port ${port}`);
});
