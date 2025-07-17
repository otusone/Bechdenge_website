const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.cookies.token;


    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid Token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Admins only.' });
    }
    next();
};

module.exports = { auth, isAdmin };
