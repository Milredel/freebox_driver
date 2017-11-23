'use strict';

const neeoapi = require('neeo-sdk');
const config = require('./config');

//this file is launched on raspi boot via script in /etc/rc.local

console.log('My custom adapter');
console.log('------------------------------------------');

/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use a single very
 * simple device.
 */

const devices = [];
if (config.freebox.isActive) {
  const freeboxController = require('./freeboxController');
  const freeboxDevice = neeoapi.buildDevice('Freebox Revolution')
    .setManufacturer('FREE')
    .addAdditionalSearchToken('box')
    .setType('DVB')

    // Then we add the capabilities of the device
    .addButton({ name: 'PLAY PAUSE TOGGLE', label: 'Play/Pause' })
    .addButton({ name: 'HELP', label: 'Infos flux' })
    .addButtonGroup('Power')
    .addButtonGroup('Volume')
    .addButtonGroup('Numpad')
    .addButtonGroup('Controlpad')
    .addButtonGroup('Color Buttons')
    .addButtonGroup('Menu and Back')
    .addButtonGroup('Channel Zapper')
    .addButtonGroup('Transport Search')
    .addButtonGroup('Transport Scan')
    .addButtonGroup('Record')
    .addButtonHandler(freeboxController.onButtonPressed);
  devices.push(freeboxDevice);
}

if (config.shield.isActive) {
  const shieldTVController = require('./shieldTVController');
  const shieldTVDevice = neeoapi.buildDevice('MY OWN SHIELD TV')
    .setManufacturer('NVIDIA')
    .addAdditionalSearchToken('android tv')
    .setType('MEDIAPLAYER')

    // Then we add the capabilities of the device
    .addButtonGroup('Power')
    .addButtonGroup('Volume')
    .addButtonGroup('Controlpad')
    .addButtonGroup('Menu and Back')
    .addButtonHandler(shieldTVController.onButtonPressed);
  devices.push(shieldTVDevice);
}

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'my-custom-server',
    devices: devices
  })
  .then(() => {
    var str = "";
    devices.forEach(function(device) {
      str += '"'+device.devicename+'" or ';
    });
    str = str.slice(0, -4);
    console.log('# READY! use the NEEO app to search for '+str+'.');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

if (devices.length == 0) {
  console.log("no active device in config");
  process.exit(1);
} else {
  const brainIp = process.env.BRAINIP;
  if (brainIp) {
    console.log('- use NEEO Brain IP from env variable', brainIp);
    startSdkExample(brainIp);
  } else {
    console.log('- discover one NEEO Brain...');
    neeoapi.discoverOneBrain()
      .then((brain) => {
        console.log('- Brain discovered:', brain.name);
        startSdkExample(brain);
      });
  }
}
