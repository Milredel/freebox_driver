'use strict';

const request = require("request");
const config = require('./config');

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports.onButtonPressed = function onButtonPressed(name, deviceId) {
    console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
    
};
