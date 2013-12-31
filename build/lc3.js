/* The arithmatic and logic unit
 * provides various functions for maths
 */

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
        execute_instruction: function() {
             
        },

        start: function(beginAddress) {
            var running = true;
            while(running) {
                // fill the IR with the location at the PC
                console.log("setting ir to " + memory.get(memory.get("pc")));
                memory.set("ir", memory.get(memory.get("pc")));
                // incrememnt the PC
                registers.pc(registers.pc() + 1);

                exec(memory.get("ir"));
                running = false;
            }
        },

        
    }
}());


/* sorry to the OG's on 80 char wide terminals
 *
 */

var fs = require("fs");
var lc3_term = (function() {
    return {
        // this will read a file and eventually call the fsm to do things
        process_file: function(filename) {
            fs.readFile(filename, 'utf8', function(err, fileData) {
                if (err) console.log(err);

                // truncate first 16 bits for begin address
                var beginPosDecInt = b2d(fileData.substring(0, 16));

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

                memory.init(beginPosDecInt, memoryInput);
               
                // load input into memory
                var add = beginPosDecInt;
                // i will traverse [0, length of input] 
                // but we will add the offset to it to put
                // it at the right position in memory

                // initializes the pc to x3000
                memory.set("pc", (x2d("3000")));
//                fsm.start();

                memory.print();
            });
      }
    };
}());

var log = false;

// parses a hexidecimal value into an integer
function x2d(hex) {
    var pInt = parseInt(hex, 16);
    if (log) console.log("parsing hex: " + hex + " into " + pInt);
    return pInt;
}

// parses a binary value into an integer
function b2d(binary) {
    var pInt = parseInt(binary, 2);
    if (log) console.log("parsing bin: " + binary + " into " + pInt);
    return pInt;
}

// turns a decimal integer into a string in binary
function d2b(decimal) {
    var dBin = decimal.toString(2);
    if (log) console.log("parsing dec: " + decimal + " into " + dBin);
    return dBin;
}

// turns a decimal integer into a string in hex
function d2h(decimal) {
    var dHex = decimal.toString(16);
    if (log) console.log("parsing dec: " + decimal + " into " + dHex);
    return dHex;
}

/* memory.js
 *
 */ var memory = (function () {
    // mem is our general purpose memory
    var mem = [x2d("FFFF")];

    function inquire(mar, mdr) {
        
    }
    return {
        init: function(beginPosition, values) {
                  console.log("in init, with " + d2h(beginPosition) + " and ");
                  console.log(values);
                  for (var i = 0; i < values.length; i++) {
                      console.log("setting " + (i + beginPosition));
                      this.set(i + beginPosition, values[i]);
                  }
              },

        // returns the memory at that integer address
        get: function(address) {
                 return mem[address];
             },

        // sets the memory at that integer address
        set: function(intAddress, value) {
                 console.log("request to set " + intAddress);
                 mem[intAddress] = value;
            },
        print: function() {
                 mem.forEach(function(elem, index) {
                    console.log(d2h(index) + ": " + elem);
                 });
               },

    };
}());

// kicks off the whole proces with this input file...
// this is appended to lc3.js during build. 
// then lc3.js is ran by node
lc3_term.process_file("INPUT");
