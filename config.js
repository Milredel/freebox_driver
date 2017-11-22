//-------------------------------------------
// Config initialization
//-------------------------------------------
let config = {};
config.freebox = {};
config.neeo = {};

//-------------------------------------------
// FREEBOX Settings
//-------------------------------------------

//remote code
config.freebox.remote_code = "61510711";

//box identifier : "hd1" or "hd2"
config.freebox.box_identifier = "hd1";

//IP address of freebox player
config.freebox.ip = "192.168.0.35";

//port used to check freebox player state
//always 54243 it seems
config.freebox.port = "54243";

//button mapping
config.freebox.mapping = {
    'PLAY PAUSE TOGGLE' : 'play',
    'SKIP FORWARD' :  'next',
    'REVERSE' : 'bwd',    
    'FORWARD' : 'fwd',
    'PREVIOUS' : 'prev',
    'NEXT' : 'next',
    'INFO' : 'info',
    'FUNCTION BLUE' : 'blue',
    'FUNCTION GREEN' : 'green',
    'FUNCTION RED' : 'red',
    'FUNCTION YELLOW' : 'yellow',
    'CURSOR UP' : 'up',
    'CURSOR DOWN' : 'down',
    'CURSOR LEFT' : 'left',
    'CURSOR RIGHT' : 'right',
    'CURSOR ENTER' : 'ok',
    'ENTER' : 'ok',
    'HOME' : 'home',
    'MENU' : 'green',
    'BACK' : 'red',
    'POWER ON' : 'power',
    'POWER OFF' : 'power',
    'VOLUME UP' : 'vol_inc',
    'VOLUME DOWN' : 'vol_dec',
    'MUTE TOGGLE' : 'mute',
    'CHANNEL DOWN' : 'prgm_dec',
    'CHANNEL UP' : 'prgm_inc',
    'DIGIT 1' : '1',
    'DIGIT 2' : '2',
    'DIGIT 3' : '3',
    'DIGIT 4' : '4',
    'DIGIT 5' : '5',
    'DIGIT 6' : '6',
    'DIGIT 7' : '7',
    'DIGIT 8' : '8',
    'DIGIT 9' : '9',
    'DIGIT 0' : '0',
    'RECORD' : 'record',
    'CHANNEL LIST' : 'list',
    'HELP' : 'help',
    'TV' : 'tv'
}

//-------------------------------------------
module.exports = config;