// create variables
const express = require('express');
const hbs = require('hbs');
const path = require('path');

// init
const app = express();

// create viewPath variable
const viewsPath = path.join(__dirname, './views');

//  declare the path to partialPath
const partialPath = path.join(__dirname, './views/inc');

// init partial path
hbs.registerPartials(partialPath);

//sets
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// uses
app.use(express.urlencoded());
app.use(express.json());



//this is a basic route
app.get("/", (req, res) => {
    // this function will render the following file  into the folder
    res.send('hello caca')
});




app.listen(4000, () => {
    console.log("server running @port 4000")
});