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

//button mapping
config.freebox.mapping = {
    "POWER TOGGLE" : "power",
    "POWER ON" : "power",
    "POWER OFF" : "power",
    "CURSOR RIGHT" : "right",
    "CURSOR DOWN" : "down",
    "CURSOR LEFT" : "left",
    "CURSOR UP" : "up",
    "CURSOR ENTER" : "ok",
    "HOME" : "home",
    "FUNCTION RED" : "red",
    "FUNCTION GREEN" : "green",
    "FUNCTION BLUE" : "blue",
    "FUNCTION YELLOW" : "yellow",
    "DIGIT 0" : "0",
    "DIGIT 1" : "1",
    "DIGIT 2" : "2",
    "DIGIT 3" : "3",
    "DIGIT 4" : "4",
    "DIGIT 5" : "5",
    "DIGIT 6" : "6",
    "DIGIT 7" : "7",
    "DIGIT 8" : "8",
    "DIGIT 9" : "9",
    "CHANNEL UP" : "prgm_inc",
    "CHANNEL DOWN" : "prgm_dec"
}

//-------------------------------------------
module.exports = config;