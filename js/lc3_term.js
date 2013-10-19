var fs = require("fs");

var lc3_term = (function() {

    return {
        go: function(filename) {
                      fs.readFile(filename, 'utf8', function(err, fd) {
                          if (err) console.log(err);

                          beginPos = b(fd.substring(0, 15));
                          fd = fd.substring(17, fd.length);
                          var lines = fd.split("\n");
                          console.log(lines);

                      });
                  }
    }
}());
