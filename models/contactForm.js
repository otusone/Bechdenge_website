const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        need: {
            type: String,
            enum: ["Real Estate", "Hotel", "Restaurant"],

        },
        message: { type: String, required: true, trim: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("ContactForm", contactFormSchema);
