const ContactForm = require("../models/contactForm");

exports.createContactForm = async (req, res) => {
    try {


        const { name, email, need, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "Name, Email, and Message are required" });
        }

        const contact = new ContactForm({ name, email, need, message });
        await contact.save();


        res.status(201).json({ success: true, message: "Message submitted successfully!", data: contact });
    }

    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }

};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactForm.find();
        res.status(200).json({ success: true, data: contacts });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error retrieving contacts", error: error.message });
    }
};

exports.updateContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await ContactForm.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        res.status(200).json({ success: true, message: "Contact updated successfully", data: updatedContact });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating contact", error: error.message });
    }
};

exports.deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await ContactForm.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        res.status(200).json({ success: true, message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting contact", error: error.message });
    }
};