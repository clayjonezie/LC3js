/* memory.js
 *
 */ 
var memory = (function () {
    // mem is our general purpose memory
    var mem = [x2d("FFFF")];

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
