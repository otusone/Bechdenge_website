const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
require('./config/db');

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');






app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routers/index');
app.use('/api/v1', index);

// //Server frontend
// const buildPath = path.join(__dirname, './client', 'dist');
// app.use(express.static(buildPath));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html')); // ✅ Shortened
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
