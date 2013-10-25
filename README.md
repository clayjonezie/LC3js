# LC3 js

A simulator for the LC-3 machine language written in Javascript. Hopefully it will run on the browser and terminal. 

# High level overview of the LC3

//TOOD get specs n such

# High level overview of components
alu.js - arithmetic logic unit, does math and such
display.js - handles displaying to the 
fsm.js - handles state of the machine, might be obsolete depending on how close to reality this emulation is
lc3_browser.js - handles plugging these components into a browser (built mutually exclusive with term.js)
lc3_term.js - handles plugging these components into a terminal with node.js (built mutually exclusive with browser.js)
math.js - helper functions for doing binary and hex conversions
memory.js - simulates the memory for the lc3
registers.js - simulates the registers of the lc3
