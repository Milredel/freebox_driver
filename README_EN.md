# FREEBOX PLAYER and NVIDIA SHIELD TV Driver

Pour voir la version française, cliquez ici https://github.com/Milredel/freebox_driver/blob/master/README.md


# NEEO Freebox Player Driver via HTTP

This driver allows to command a Freebox Play (french isp set top box) via HTTP requests.

## Prerequesite

* At least Node.js v6 installed, see http://nodejs.org

## Start

* Launch "npm install" to install dependencies. Launch "node index.js"

## Configuration

This driver needs several informations to work, put them in the config.js file :

* First, the remote code to command the Player. It is located in "Réglages" menu in the Player UI, and "Système", "Informations Freebox Player et Server". Then, in the first tab (the one selected by default), in upper right, under the menu "Télécommande", find "Code télécommande réseau".

This code has to be put in the variable freebox.remote_code.

* You'll also need the IP address of the Freebox Player. In http://http://mafreebox.free.fr/ mebu "Périphériques réseau", then click on "Freebox Player". The IP address is located in the third tab ("Connectivité") (something like 192.168.x.x)

The IP address has to be put in the variable freebox.ip

* If you want to control a second Freebox Play, you'll have to modify the freebox.box_identifier variable by "hd2" and create another device in index.js file.

* To be visible from the NEEO app, the freebox.isActive must be set to true;

## Shortcuts

Shortcuts to TV, Deezer, Replay and Disk are available


# NEEO NVIDIA Shield TV Driver via adb

Ce driver permet de commander une NVIDIA Shield TV via adb
This driver allow to command a NVIDIA Shield TV via adb

## Prerequesite

* At least Node.js v6 installed, see http://nodejs.org
* Yuu'll need adb installed on your machine running node (sudo apt-get install android-tools-adb) and configured for the NVIDIA Shield TV. To do this, follow this link to activate the developer mode https://docs.nvidia.com/gameworks/content/developertools/mobile/nsight_tegra/nsight_tegra_unlock_devmode.htm. Then, in the new menu, check "usb debugging" and "network debugging". On the machine running node, launch "sudo adb start-server" then "sudo adb connect SHIELD_IP" (with SHIELD_IP being the IP address of your Shield TV). On your TV screen, you'll see a popup asking you to accept the connection. Don't forget to check the case "always authorize for this computer".
* To check if everything is running fine, launch "sudo adb devices". You should see a line like "SHIELD_ID:5555 device".

## Start

* Launch "npm install" to install dependencies. Launch "node index.js"

## Configuration

This driver needs several informations to work, put them in the config.js file :

* You need the IP address of the Shield TV (something like 192.168.x.x)

The IP address has to be put in the variable shield.ip

* In the default mapping, there is no real power off/power on, only a wakeup call. You can use the commands "off" and "power" instead of those defined in "POWER OFF" and "POWER ON".

* To be visible from the NEEO app, the shield.isActive must be set to true;

## Shortcuts

A shortcut to Netflix is available