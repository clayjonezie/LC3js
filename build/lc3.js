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
                      fs.readFile(filename, 'utf8', function(err, fd) {
                          if (err) console.log(err);

                          beginPos = b(fd.substring(0, 15));
                          fd = fd.substring(16, fd.length);
                          var lines = fd.split("\n");  
                          console.log(lines);

                      });
                  }
    }
}());

// parses a hexidecimal value into an integer
function x(hex) {
    return parseInt(hex, 16);
}

// parses a binary value into an integer
function b(binary) {
    return parseInt(binary, 2);
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
        set: function(address, value) {
                 mem[x(address)] = value;
            }
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
