const credentials = {
    apiKey: '699f3fb76bca880163fbe357c9c3758a33cd50b160c6cf9911b726f2287adcc1',         // use your sandbox app API key for development in the test environment
    username: 'kevann',      // use 'sandbox' for development in the test environment
};
const AfricasTalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = AfricasTalking.SMS

// Use the service
const options = {
    to: ['+254787378324'],
    message: "I'm a lumberjack and its ok, I work all night and sleep all day"
}

// Send message and capture the response or error
sms.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });