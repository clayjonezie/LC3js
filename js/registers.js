/* registers.js
 *
 */ 

var registers = (function () {
    // mem is our general purpose memory
    var registers = {};

    return {
        // returns the memory at that integer address
        get: function(register) {
                 return registers[register];
             },

        // sets the memory at that integer address
        set: function(intAddress, value) {
                 console.log("request to set " + intAddress);
                 mem[intAddress] = value;
            },
        print: function() {
                   //TODO iterate on registers and list em
               },

    };
}());
