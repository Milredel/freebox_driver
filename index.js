'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('Freebox adapter');
console.log('------------------------------------------');

/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use a single very
 * simple device.
 */

// first we set the device info, used to identify it on the Brain
const freeboxDevice = neeoapi.buildDevice('Freebox Revolution')
  .setManufacturer('FREE')
  .addAdditionalSearchToken('box')
  .setType('ACCESSOIRE')

  // Then we add the capabilities of the device
  .addButton({ name: 'POWER TOGGLE', label: 'Bouton ON OFF' })
  .addButton({ name: 'HOME', label: 'Bouton FREE' })
  .addButtonGroup("Controlpad")
  .addButtonGroup("Color Buttons")
  .addButtonGroup("Numpad")
  .addButtonGroup("Power")
  .addButtonGroup("Channel Zapper")
  .addButtonHandler(controller.onButtonPressed);

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'freebox-server',
    devices: [freeboxDevice]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "Freebox Revolution".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

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
