//imports
const express = require("express");
const path = require("path");
const app = express();
const mysql = require('mysql');

// setting up mysql connection details
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "classicmodels"
});

//setting up path sets and use
const viewsPath = path.join(__dirname, '/views');
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.urlencoded());
app.use(express.json());


// connection to mysql
db.connect( (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected");
    }
});


//main render to index.hbs
app.get("/", (req, res) => {

    db.query('SELECT * FROM users', (error, results) => {
        console.log(results);

        res.render("index", {
            users: results // [{}, {}]
        });     
    });
});


// this is hard coded now, but it for the sql project will need to be passed from a form at index.
// ++++++++++++++++++++++++++++++++
app.get("/register", (req, res) => {
    let name = "Joe";
    let age = 26;
    let city = "York"
// +++++++++++++++++++++++++++++++++


    db.query('SELECT first_name FROM users WHERE first_name = ?',
        [name], (error, results) => {
            if( results.length > 0) {
                res.render("register",{
                    message: "Sorry that username has been taken"
                })
            } else {
                db.query('INSERT INTO users SET ?',
                {first_name: name, age: age, city: city}, (error, results) => {
                    if(error) {
                        res.render("register",{
                            message: "Sorry there was an error"
                        })
                    } else {
                        res.render("register",{
                            message: "User registered"
                        })
                    }
                });
            }
        })
})



// you always need an app.get before the app.post in order to be able to display
app.get("/update", (req, res) => {
    res.render("update");
})
// this is what coming next after the above app.get

app.post("/update/:id", (req, res) => {
    console.log(req.params.id);
    let name  = req.body.user_name;
    let id = req.params.id;
    let sql = 'UPDATE users SET first_name = ? WHERE id = ?';
    let user = [name, id];

    db.query( sql, user, (error, results) => {
        if(error) {
            console.log(error);
            res.render("update", {
                message: "There was an error updating your user"
            })
        } else {
            res.render("update", {
                message: "User updated"
            })
        }
    })



    res.render("update");
});


//listening
app.listen(4000, () => {
    console.log("Server is running on Port 4000");
})
