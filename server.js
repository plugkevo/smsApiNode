

const express = require('express');
const Africastalking = require('africastalking');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Parse JSON bodies
app.use(bodyParser.json());

// Africa's Talking credentials
const credentials = {
    apiKey: '699f3fb76bca880163fbe357c9c3758a33cd50b160c6cf9911b726f2287adcc1', // Replace with your actual API key
    username: 'kevann', // Replace with your actual username
};
const africasTalking = Africastalking(credentials);
const sms = africasTalking.SMS;

// Endpoint to send SMS
app.post('/send-sms', (req, res) => {
    const options = {
        to: req.body.to,
        message: req.body.message,
    };

    sms.send(options)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});