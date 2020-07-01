//! this file contains express js and its connected with render into index.html

//! express is imported as variable express
const express = require('express');

//! variable its turned into express() function
const app = express();

//! public folder is declared as the default file container
app.use(express.static('public'));


//!    here -> '/' represents the browser and in this case the this / alone would be the home page
//! app.get is given  a function with 2 args(req and res)
app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.txt');
    // res.send('Hello word caca')
});

//! this will catch the req to access the about page and a res will be send/render the about page.
app.get('/about', function (req, res) {
    res.sendFile(__dirname + 'about.html');
});

//! this doesn't work for some reason
app.get('*', function (req, res) {
    res.sendFile(__dirname + 'notFound.html');
});


app.listen(5000, () => {
    console.log('server is running in port 5000');
});