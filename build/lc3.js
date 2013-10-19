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



var memory = (function () {
    var mem = [];

    function inquire() {

    }
    return {
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

fsm.go();
