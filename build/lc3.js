var alu = (function() {
    var add = function(a, b) {
        a.forEach(function(elem, i, arr) {
                      
        });
    }

    var and = function(a, b) {
        var output = []; 
        a.forEach(function(elem, i, arr) {
            if (elem && (elem[i])) {
                output[i] = true;
            }
        });
    }

    var not = function(a, b) {
        var output = [];

    }
}());


fsm = (function() {
    
    return {
        go: function() {
                var running = true;
                
                while (running) {
                    
                }
        }
    }
}());


var fs = require("fs");

var lc3_term = (function() {

    return {
        go: function(filename) {
                      fs.readFile(filename, 'utf8', function(err, fileData) {
                          if (err) console.log(err);

                          // truncate first 16 bits for begin address
                          var beginPosDecInt = b(fileData.substring(0, 16));

                          // rid those bits
                          var lc3_data = fileData.substring(17, fileData.length);
                          var memoryInput = lc3_data.split("\n");

                          // remove empty lines at the end.
                          // this may not be clear -->
                          //   we have some inputs that are empty at the end of 
                          //   the array. if there is one at the end 
                          //   (memoryInput.length - 1), then we kill it by reducing 
                          //   length. then the wile will rerun if there is one at
                          //   the NEW memoryInput.length, being before the previus ''.
                          while(memoryInput[memoryInput.length - 1] === '') {
                              memoryInput.length--;
                          }

                          console.log(memoryInput);
                         
                          // load input into memory

                          var add = beginPosDecInt;
                          // i will traverse [0, length of input] 
                          // but we will add the offset to it to put
                          // it at the right position in memory
                          for (var i = 0; i < memoryInput.length; i++) {
                              console.log("setting into memory at " + i+add + " with " +
                                      memoryInput[i]);
                              memory.set(i+add, memoryInput[i]);
                          }


                          memory.print();
                      });
                  }
    };
}());

// parses a hexidecimal value into an integer
function x(hex) {
    var pInt = parseInt(hex, 16);
    console.log("parsing hex: " + hex + " into " + pInt);
    return pInt;
}

// parses a binary value into an integer
function b(binary) {
    var pInt = parseInt(binary, 2);
    console.log("parsing bin: " + binary + " into " + pInt);
    return pInt;
}

// turns a decimal integer into a string in binary
function dBin(decimal) {
    var dBin = decimal.toString(2);
    console.log("parsing dec: " + decimal + " into " + dBin);
    return dBin;
}

// turns a decimal integer into a string in hex
function dHex(decimal) {
    var dHex = decimal.toString(16);
    console.log("parsing dec: " + decimal + " into " + dHex);
    return dHex;
}

var memory = (function () {
    var mem = [x("FFFF")];

    function inquire(mar, mdr) {
        
    }
    return {
        init: function(beginPosition, values) {
                  for (var i = beginPosition; i < values.length; i++) {
                      memory[i + beginPosition] = values[i];
                  }
              },
        get: function(address) {
                 return mem[x(address)];
             },
        set: function(intAddress, value) {
                 mem[intAddress] = value;
            },
        print: function() {
                 mem.forEach(function(elem, index) {
                    console.log(dHex(index) + ": " + elem);
                 });
               },

    };
}());

var registers = (function() {
    var r1 = [];
    var r2 = [];
    var r3 = [];
    var r4 = [];
    var r5 = [];
    var r6 = [];
    var r7 = [];
    var pc = [];
    return {
        r1: [],
        r2: [],
        r3: [],
        r4: [],
        r5: [],
        r6: [],
        r7: [],
        pc: []
    };
}());

lc3_term.go("INPUT");
console.log("going");
console.log(memory.get(x("3001")));
