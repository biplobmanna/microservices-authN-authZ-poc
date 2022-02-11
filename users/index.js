const express = require("express");
const express_session = require("express-session");

const app = express();
const port = 5055;
const host = '0.0.0.0';

// Routes
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// Starting the server
app.listen(port, host, () => {
    console.log(`Users serivces started...\nListening on port ${port}\n`);
});