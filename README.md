# FREEBOX PLAYER and NVIDIA SHIELD TV Driver

To view english version, click here https://github.com/Milredel/freebox_driver/blob/master/README_EN.md


# NEEO Freebox Player Driver via HTTP

Ce driver permet de commander une Freebox Player via des requêtes HTTP.

## Prérequis

* Avoir Node.js v6 installé au minimum, voir http://nodejs.org

## Pour commencer

* Lancer la commande "npm install" pour installer les dépendances. Lancer "node index.js"

## Configuration

Ce driver nécessite différentes informations pour fonctionner, elles sont à renseigner dans le fichier config.js : 

* Pour commencer, le code télécommande pour commander le Player. Il se trouve dans le menu "Réglages" du Player, puis "Système", "Informations Freebox Player et Server". Dans le premier onglet (sélectionné par défaut) en haut à droite sous la rubrique "Télécommande", chercher "Code télécommande réseau".

Ce code est à renseigner dans la variable freebox.remote_code.

* Il faut également renseigner l'adresse IP du Freebox Player que vous pouvez trouver dans l'interface FreeboxOS (http://http://mafreebox.free.fr/) rubrique "Périphériques réseau" puis en cliquant sur "Freebox Player". L'adresse IP se trouve dans le 3e onglet "Connectivité" et est de la forme "192.168.x.xx".

L'adresse IP est à renseigner dans la variable freebox.ip 

* Si vous souhaitez controler un 2e boitier Player, il faut modifier la variable freebox.box_identifier par 'hd2'. Il faudra aussi probablement créer un autre device dans le fichier index.js

* Pour être visible dans l'application NEEO, la variable freebox.isActive doit être mise à true;


# NEEO NVIDIA Shield TV Driver via adb

Ce driver permet de commander une NVIDIA Shield TV via adb

## Prérequis

* Avoir Node.js v6 installé au minimum, voir http://nodejs.org
* Avoir adb installé (sudo apt-get install android-tools-adb) et configuré pour le boitier NVIDIA Shield. Pour ce faire, il faut activer le mode développeur sur la Shield (suivre le tutoriel https://docs.nvidia.com/gameworks/content/developertools/mobile/nsight_tegra/nsight_tegra_unlock_devmode.htm). Dans le menu développeur fraîchement créé, activer le debugging USB puis le debugging réseau. Ensuite, sur la machine qui héberge node, faire "sudo adb start-server" puis "sudo adb connect SHIELD_IP". Sur l'écran de votre téléviseur, un message demande d'accepter la connexion, cocher aussi la case "toujours autoriser pour cet ordinateur".
* Pour tester, un "sudo adb devices" doit vous donner une ligne ressemblant à "SHIELD_ID:5555 device"


## Pour commencer

* Lancer la commande "npm install" pour installer les dépendances. Lancer "node index.js"

## Configuration

Ce driver nécessite différentes informations pour fonctionner, elles sont à renseigner dans le fichier config.js : 

* Il faut également renseigner l'adresse IP de la Shield TV (de la forme "192.168.x.xx")

L'adresse IP est à renseigner dans la variable shield.ip 

* Dans le mapping, pas d'extinction/allumage digne de ce nom, uniquement un "wakeup" pour sortir le boîtier de veille s'il y est. Vous pouvez utiliser les commandes "off" et "power" en remplacement des "POWER OFF" et "POWER ON" définis par défaut.

* Pour être visible dans l'application NEEO, la variable shield.isActive doit être mise à true;