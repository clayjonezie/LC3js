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
