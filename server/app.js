require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8088;

//SSL options
var httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
};

await axios.post(msTeamsUrl, message);


//Health check route - [https://localhost:8088/api/health]
app.get('/api/health', (req, res) => res.status(200).send({message: "Server running - DON'T WORRY MY MAN"}));
const server = https.createServer(httpsOptions, app);

server.listen(port, () =>{
    console.log(`App running at port - ${port}`);
});