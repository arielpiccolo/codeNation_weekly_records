// handlerbar template?

// create variables
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const request = require('request');
const { response } = require('express');

// turn variable app into function express
const app = express();


// create viewPath variable
const viewsPath = path.join(__dirname, './views');

//  declare the path to partialPath
const partialPath = path.join(__dirname, './views/inc');


// and initiate partial path
hbs.registerPartials(partialPath);

app.set('view engine', 'hbs');

app.set('views', viewsPath);

app.use(express.urlencoded());
app.use(express.json());




//this is a basic route
app.get("/", (req, res) => {
    // this function will render the following file  into the folder
    res.render('index', {
        name: "Ariel"
    });
});

//  .get is a request method
app.get("/about", (req, res) => {
    // this function will render the following file into the folder
    res.render('about');
});

// accessing same page but now using .GET
app.get("/about", (req, res) => {
    res.render('about');
});


// rending to the page using .GET and .POST
app.get("/results", (req, res) => {
    res.render('displayResults');
});

app.post("/results", (req, res) => {
    console.log(req.body);
    res.render('displayResults', {
        name: req.body.userName,
        email: req.body.userEmail
    });
});





app.get("/api", (req, res) => {
    res.status(200).json({
        job: "Software Developer",
        city: "New York",
        salary: "100k"
    })
})





app.listen(4000, () => {
    console.log("server running @port 4000")
});


