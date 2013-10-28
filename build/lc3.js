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

    function exec(address) {

    }
    
    return {
        go: function() {
                var running = true;
                
                while (running) {
                    
                }
        },

        start: function(beginAddress) {
            var running = true;
            while(running) {
                var pc = registers.pc();
                console.log("pc was " + pc);
                var ir = registers.pc(memory.get(pc));
                console.log("ir held " + ir);
                exec(beginAddress);
                running = false;
            }
        },

        
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

                          fsm.start();
                              

                          memory.print();
                      });
                  }
    };
}());

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
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    var r5 = 0;
    var r6 = 0;
    var r7 = 0;
    var pc = 0;
    return {
        r1: function(value) {
                if (value !== undefined)
                    return (r1 = value);
                else
                    return r1;
            },
        r2: function(value) {
                if (value !== undefined)
                    return r2 = value;
                else
                    return r2;
            },
        r3: function(value) {
                if (value !== undefined)
                    return r3 = value;
                else
                    return r3;
            },
        r4: function(value) {
                if (value !== undefined)
                    return r4 = value;
                else
                    return r4;
            },
        r5: function(value) {
                if (value !== undefined)
                    return r5 = value;
                else
                    return r5;
            },
        r6: function(value) {
                if (value !== undefined)
                    return r6 = value;
                else
                    return r6;
            },
        r7: function(value) {
                if (value !== undefined)
                    return r7 = value;
                else
                    return r7;
            },
        pc: function(value) {
                if (value !== undefined)
                    return pc = value;
                else
                    return pc;
            },
        ir: function(value) {
                if (value !== undefined)
                    return ir = value;
                else
                    return ir;
            }
    };
}());


// kicks off the whole proces with this input file...
// this is appended to lc3.js during build. 
// then lc3.js is node'd
lc3_term.go("INPUT");
