const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;




exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, mobile, address, gender, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            mobile,
            address,
            gender,
            role
        });

        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully"
        });

    } catch (error) {
        console.error("Error during user registration:", error); 
        res.status(500).json({
            success: false,
            message: "Problem in signUp.",
            error: error.message 
        })
    }

};


exports.loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });


        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.logoutUser = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
};




