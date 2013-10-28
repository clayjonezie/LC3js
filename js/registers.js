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
