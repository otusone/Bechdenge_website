const express = require('express')
const dotenv = require("dotenv")
const path=require("path")
dotenv.config()
const bodyParser = require('body-parser');
const app = express()
const index = require("./routers/index")

const db = require('./config/db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/v1", index)

const buildPath = path.join(__dirname, './client', 'dist')
app.use(express.static(buildPath))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'dist', "index.html"));
});


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})