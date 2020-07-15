//  imports
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');

// variable User, next, is importing the Schema, and this is also why it begins with an Upper.
const User = require('./models/user');
const { create } = require('./models/user');
// const hbs = require('hbs');


// settings
dotenv.config({ path: './config.env' })

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const viewsPath = path.join(__dirname, '/views');
app.set('view engine', 'hbs');
// ===========

// error catch
// passing credentials from config.env file
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongodb is Connected!'));


// route to query data
app.get('/', async (req, res) => {

    // req a list of all users using find, find will bring back all the users
    // async and await are used to tell JS to wait for this task to be completed before move onto the next task.
    const allUsers = await User.find();

    // log all the user to the console
    console.log(allUsers);
    // targeting only name of user user 1
    // console.log(allUsers[1].name) or
    // const user = await User.find({name: "Ariel"});  <<- name or email or whatever
    const user = await User.findById("5f0e4231abc4750205782eb7");

    // render this message to the page
    res.send("this is the home page")
})


// route to update details
app.get('/update', async (req, res) => {

    await User.findByIdAndUpdate("5f0e4231abc4750205782eb7", {
        name: "Pedro"

    });

    res.send("User updated")
});



// ? REGISTER PAGE - GET AND POST
// route to register new entry

app.get("/register", (req, res) => {
    res.render("register");
});


// async function
app.post("/register", async (req, res) => {
    // next code grabs details from input in register.hbs
    const name = req.body.userName;
    const email = req.body.userEmail;
    const password = req.body.userPassword;

    // hashing password using bcryptjs package
    // the input password from above(from register form) is passed onto a new variable(hashedPass) and encrypted using .hash 8 rounds or hashed on it self 8 time. 
    const hashedPass = await bcrypt.hash(password, 8);

    //the next code will fill in the mongodb table with details from the above input
    // .create will send the following objects
    await User.create(
        {
            name: name,
            email: email,
            password: hashedPass
        }
    );
    res.send("User Registered")

});

// catching /login page request
app.get('/login', (req, res) => {
    res.render("login");
})

// dealing with login form
app.post("/login", async (req, res) => {

    // grab login input from user in login form(login.hbs)
    const email = req.body.userEmail;
    const password = req.body.userPassword;

    // checking credentials
    //   input user / check on User Schema / find email
    const user = await User.find({ email: email });
    console.log(user);

    if (user.length > 0) {


        // this variable will compare the input password at login with the hashed password in the database using the .compare function from bcryptjs
        const Matched = await bcrypt.compare(password, user[0].password);
        // log the matched user for testing
        console.log(user[0].password);
        console.log(Matched);


        if (Matched) {
            res.send('Welcome back');

        } else {
            res.send("Wrong details");
        }



    } else {
        res.send("User not Registered")
        console.log("User not registered")
    }


});


// route to delete records
// you can delete by name or email or id, if name is used mongo will remove the first name that matches. 
app.get('/delete', async (req, res) => {

    // finding user by id 
    await User.findByIdAndDelete("5f0e4231abc4750205782eb7", {

    });

    res.send("User delete")
});


//         config.env folder + port
app.listen(process.env.PORT, () => (console.log(`Server is running @port ${process.env.PORT}`)))











// ! NOTES



//     //? the next code is just another way to do the above.
//      const { userName, userEmail, userPassword} = req.body;
// });
//  ? =====================================






// app.post("/register", async (req, res) => {

//      this function will access the database and create the following entries. 
//     await User.create ({
//         name: "john",
//         email: "john@email.com",
//         password: "password"
//     });
//      then render this message to the page
//     res.send("User Registered");
// });
//  ? =====================================