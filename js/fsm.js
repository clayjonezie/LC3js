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
