const configs = require('./configs');
const creds = require('./credentials');

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

module.exports = () => console.log('configs are', configs, 'and credentials', creds);


