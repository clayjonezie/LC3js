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
