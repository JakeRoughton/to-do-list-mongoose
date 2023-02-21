//Import Mongoose library
const mongoose = require("mongoose");


//Create a task schema
const taskSchema = new mongoose.Schema({
    name: String, //Validation required
    description: String,
    completed: Boolean, //Validation required
    dateCreated: { type: Date, default: Date.now },
    dateCompleted: { type: Date, },
    status: { type: String, default: "incomplete" }
    // Validation required ('incomplete', 'complete', 'deferred')
})

module.exports = taskSchema;