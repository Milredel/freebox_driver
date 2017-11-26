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
        var action = config.freebox.mapping[actionName];
        if (action != undefined) {
            if (Array.isArray(action)) {
                var totalDelay = 0;
                action.forEach(function(singleAction, index) {
                    var delaySupp = 1000;
                    if (index == 1) delaySupp = 2500;
                    totalDelay += delaySupp;
                    setTimeout(sendRequest.bind(null, singleAction), totalDelay);
                });
            } else {
                sendRequest(action);
            }
        } else {
            console.log("unknown action");
        }
    }
};

function sendRequest(keyValue) {
    try {
        var myRequest = "http://"+config.freebox.box_identifier+".freebox.fr/pub/remote_control?code="+config.freebox.remote_code+"&key="+keyValue;
        console.log("preparing and launching request : "+myRequest);
        request({
            uri: myRequest,
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