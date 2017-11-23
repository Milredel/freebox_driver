'use strict';

const request = require("request");
const config = require('./config');

const { exec } = require('child_process');

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports.onButtonPressed = function onButtonPressed(name, deviceId) {
    console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
    var actionName = name;
    if (config.shield.mapping[actionName] != undefined && config.shield.mapping[actionName] != "") {
        
        exec('sudo adb devices', (err, stdout, stderr) => {
            if (err) {
                console.log("something went wrong with adb command");
                return;
            }
            if (-1 !== stdout.indexOf(config.shield.ip)) {
                exec('sudo adb shell '+config.shield.mapping[actionName], (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            } else {
                exec('sudo adb connect '+config.shield.ip, (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    }
                    exec('sudo adb shell '+config.shield.mapping[actionName], (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    });    
                });
            }
        });
    } else {
        console.log("unknown action");
    }
};
