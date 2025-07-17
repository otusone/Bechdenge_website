const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, },
    address: { type: String, },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], },
    role: { type: String, enum: ['User', 'Admin'], required: true },

}, {
    versionKey: false,
    timestamps: true
});


module.exports = mongoose.model("User", userSchema);