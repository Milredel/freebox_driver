//-------------------------------------------
// Config initialization
//-------------------------------------------
let config = {};
config.freebox = {};
config.shield = {};

//-------------------------------------------
// FREEBOX Settings
//-------------------------------------------

//freebox is active
config.freebox.isActive = true;

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
    'PLAY' : 'play',
    'PAUSE' : 'play',
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
    'TV' : 'tv',
    'LAUNCH TV' : ['home', 'home', 'ok'],
    'LAUNCH REPLAY' : ['home', 'home', 'right', 'down', 'down', 'ok'],
    'LAUNCH DEEZER' : ['home', 'home', 'right', 'right', 'down', 'ok'],
    'LAUNCH DISK' : ['home', 'home', 'right', 'right', 'right', 'right', 'ok']
}

//-------------------------------------------
// NVIDIA SHIELD TV Settings
//-------------------------------------------

//freebox is active
config.shield.isActive = true;

//IP address of the shield tv
config.shield.ip = "192.168.0.32";

//button mapping
config.shield.mapping = {
    'CURSOR UP' : 'input keyevent 19',
    'CURSOR DOWN' : 'input keyevent 20',
    'CURSOR LEFT' : 'input keyevent 21',
    'CURSOR RIGHT' : 'input keyevent 22',
    'CURSOR ENTER' : 'input keyevent KEYCODE_ENTER',
    'ENTER' : 'input keyevent KEYCODE_ENTER',
    'HOME' : 'input keyevent 3',
    'MENU' : 'input keyevent 3',
    'BACK' : 'input keyevent KEYCODE_BACK',
    'POWER ON' : 'input keyevent KEYCODE_WAKEUP',
    'POWER OFF' : '',
    //"off" : 'input keyevent 5'
    //"power" : 'input keyevent 26'
    'VOLUME UP' : 'input keyevent 24',
    'VOLUME DOWN' : 'input keyevent 25',
    'LAUNCH NETFLIX' : 'monkey -p com.netflix.ninja -c android.intent.category.LAUNCHER 1'
}

//-------------------------------------------
module.exports = config;