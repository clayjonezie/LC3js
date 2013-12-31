run: 
	jscat js/*.js > build/lc3.js
	cat build/go.js >> build/lc3.js
	node build/lc3.js
