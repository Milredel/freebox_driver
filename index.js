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
  .addButton({ name: 'button-on-off', label: 'Bouton ON OFF' })
  .addButton({ name: 'button-right-arrow', label: 'Bouton FLECHE DROITE' })
  .addButton({ name: 'button-down-arrow', label: 'Bouton FLECHE BAS' })
  .addButton({ name: 'button-left-arrow', label: 'Bouton FLECHE GAUCHE' })
  .addButton({ name: 'button-up-arrow', label: 'Bouton FLECHE HAUT' })
  .addButton({ name: 'button-ok', label: 'Bouton OK' })
  .addButton({ name: 'button-free', label: 'Bouton FREE' })
  .addButton({ name: 'button-red', label: 'Bouton ROUGE' })
  .addButton({ name: 'button-green', label: 'Bouton VERT' })
  .addButton({ name: 'button-blue', label: 'Bouton BLEU' })
  .addButton({ name: 'button-yellow', label: 'Bouton JAUNE' })
  .addButton({ name: 'button-0', label: 'Bouton 0' })
  .addButton({ name: 'button-1', label: 'Bouton 1' })
  .addButton({ name: 'button-2', label: 'Bouton 2' })
  .addButton({ name: 'button-3', label: 'Bouton 3' })
  .addButton({ name: 'button-4', label: 'Bouton 4' })
  .addButton({ name: 'button-5', label: 'Bouton 5' })
  .addButton({ name: 'button-6', label: 'Bouton 6' })
  .addButton({ name: 'button-7', label: 'Bouton 7' })
  .addButton({ name: 'button-8', label: 'Bouton 8' })
  .addButton({ name: 'button-9', label: 'Bouton 9' })
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
