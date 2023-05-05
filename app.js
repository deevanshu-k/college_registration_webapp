require("dotenv").config();
const bodyparser = require('body-parser');
const express = require("express");
const app = express();
const path = require("path");
const countrystatecityRouter = require("./routes/countrystatecity.route");
const registionRouter = require("./routes/registration.route");
const {Student} = require('./models');
const port = process.env.PORT || 8080;


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));

app.use('/static', express.static('static'));
// app.use('/alimage', express.static('uploads'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/v1/api',countrystatecityRouter);
app.use('/registation',registionRouter);


app.get('**', (req,res) => {
    res.redirect('/registation');
});


app.listen(port,() => {
    console.log("Server listening on port : ",port)
});

