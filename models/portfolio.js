const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

    title: { type: String, trim: true },
    imageUrl: { type: String },
    description: { type: String },
    


}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("Portfolio", portfolioSchema);

