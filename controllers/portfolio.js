const Portfolio = require('../models/portfolioModel');



exports.createPortfolio = async (req, res) => {
    try {
        const { title, description, imageUrl } = req.body;

        const newPortfolio = new Portfolio({
            title,
            description,
            imageUrl,
        });

        await newPortfolio.save();

        res.status(201).json({
            success: true,
            message: "Portfolio project created successfully.",
            data: newPortfolio
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};


exports.getAllPortfolios = async (req, res) => {
    try {
        const projects = await Portfolio.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch projects", error: error.message });
    }
};


exports.getPortfolioById = async (req, res) => {
    try {

        const { id } = req.params.id;
        
        const project = await Portfolio.findById(id);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error retrieving project", error: error.message });
    }
};


exports.updatePortfolio = async (req, res) => {
    try {
        const updatedProject = await Portfolio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, message: "Project updated", data: updatedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: "Update failed", error: error.message });
    }
};


exports.deletePortfolio = async (req, res) => {
    try {
        const deletedProject = await Portfolio.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Delete failed", error: error.message });
    }
};
