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
    
    database: "employees_db"
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

    // db.query('SELECT * FROM employees', (error, results) => {
    //     console.log(results);
   

        res.render("index", {
            // employees: results // [{}, {}]
        });     
    });
// });


//listening
app.listen(3000, () => {
    console.log("Server is running on Port 3000");
})

//  app.get("register", (req, res) => {
//     let name = "Helen";
//     let age = 21;
//     let city = "Toronto";

//     db.query('insert into employees set ?', {first_name: name, age: age, city: city}, (error, results)) => {
            // if(error) {
                // res.render("register", {
                //     message: "sorry there was an error"
                // })
            // { else }
            //     res.render("register"), {
            //         message: "registered"
            //     }
            // }
// }

// })
