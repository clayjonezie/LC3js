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
