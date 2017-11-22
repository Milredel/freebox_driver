'use strict';

const request = require("request");
const config = require('./config');

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports.onButtonPressed = function onButtonPressed(name, deviceId) {
    console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
    var actionName = name;
    if (actionName == "POWER ON" || actionName == "POWER OFF") {
        try {
            console.log("preparing and launching request to get state of freebox player");
            request({
                uri: "http://"+config.freebox.ip+":"+config.freebox.port+"/device.xml",
                method: "GET",
                timeout: 10000,
                followRedirect: true,
                maxRedirects: 10
            }, function(error, response, body) {
                if (error) {
                    //freebox player is not switched on
                    if(actionName == "POWER ON") {
                        if (config.freebox.mapping[actionName] != undefined) {
                            sendRequest(config.freebox.mapping[actionName]);
                        } else {
                            console.log("unknown action");
                        }
                    }
                } else {
                    // freebow player is switched on
                    if (actionName == "POWER OFF") {
                        if (config.freebox.mapping[actionName] != undefined) {
                            sendRequest(config.freebox.mapping[actionName]);
                        } else {
                            console.log("unknown action");
                        }
                    }
                }
                
            });
        } catch (e) {
            console.log(e);
        }
    } else {
        if (config.freebox.mapping[actionName] != undefined) {
            sendRequest(config.freebox.mapping[actionName]);
        } else {
            console.log("unknown action");
        }
    }
};

function sendRequest(keyValue) {
    try {
        console.log("preparing and launching request");
        request({
            uri: "http://"+config.freebox.box_identifier+".freebox.fr/pub/remote_control?code="+config.freebox.remote_code+"&key="+keyValue,
            method: "GET",
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10
        }, function(error, response, body) {
            if (error) console.log(error);
            console.log("request sent");
        });
    } catch (e) {
        console.log(e);
    }
}