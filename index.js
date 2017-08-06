var worker = require("robotjs");
const ioHook = require('iohook');

worker.setMouseDelay(20);


ioHook.on("keypress", event => {

if(event.keychar == 127)	{

		worker.keyTap("escape");
		worker.moveMouse(3340, 731);
		worker.mouseClick("left");	
		worker.moveMouse(3374, 732);	
		worker.mouseClick("left");
		worker.keyTap("f1");	
		worker.moveMouse(3397, 924);
		worker.setMouseDelay(35);
		
		console.log("specing");
		worker.mouseClick("left");


		}
		
		console.log(event.keychar);

  //{keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
});
ioHook.start();
