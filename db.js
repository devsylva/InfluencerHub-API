const mongoose = require("mongoose");
const { MONGO_URI } = process.env

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateindex: true,
})

const db = mongoose.connection;

db.on("error", console.error.bind(consolle, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB database");
});

module.exports = {
    db,
    mongoose
}