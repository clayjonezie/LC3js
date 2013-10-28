var log = false;

// parses a hexidecimal value into an integer
function x(hex) {
    var pInt = parseInt(hex, 16);
    if (log) console.log("parsing hex: " + hex + " into " + pInt);
    return pInt;
}

// parses a binary value into an integer
function b(binary) {
    var pInt = parseInt(binary, 2);
    if (log) console.log("parsing bin: " + binary + " into " + pInt);
    return pInt;
}

// turns a decimal integer into a string in binary
function dBin(decimal) {
    var dBin = decimal.toString(2);
    if (log) console.log("parsing dec: " + decimal + " into " + dBin);
    return dBin;
}

// turns a decimal integer into a string in hex
function dHex(decimal) {
    var dHex = decimal.toString(16);
    if (log) console.log("parsing dec: " + decimal + " into " + dHex);
    return dHex;
}
