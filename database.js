const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scooteq",
    connectionLimit: 10
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
})

con.query(`select * from scooters`, (err, result, fields) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
})


// hahahahahahaha