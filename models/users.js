const mongoose = require('mongoose')
require('dotenv').config();

// Connecting to database 
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING).then((ans) => { 
    console.log("ConnectedSuccessful");
  }).catch((err) => { 
    console.log("Error in the Connection");
    console.log(err);
  }) 

const userSchema = new mongoose.Schema({
    dateCreated: { type: Date, default: Date.now() },
    firstname: { type: String, lowercase: true, required: true },
    lastname: { type: String, lowercase: true, required: true },
    ucid: { type: String, lowercase: true, required: true },
    email: { type: String, lowercase: true, required: true },
    resumeS3Link: { type: String, required: true}
});

const User = mongoose.model('User', userSchema);
module.exports = { User };