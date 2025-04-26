const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
    },
    message:{
        type:String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Feedback", feedbackSchema);