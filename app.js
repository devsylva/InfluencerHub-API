const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const db = ("./db");


const app = express();
require("dotenv").config();
const { PORT } = process.env || 8080

// middlewares
app.use(bodyParser.json()); //parse JSON in request bodies
app.use(bodyParser.urlencoded({
    extended: false
}));  //parse URL-encooded form data 
app.use(helmet()); //enhance security
app.use(morgan("dev")) //logs request to the console in a development-friendly manner
app.use(cors()) //handle cross-origin resource sharing
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!"
    });
});


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})