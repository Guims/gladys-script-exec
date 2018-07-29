module.exports = function(sails) {
	
		var install = require('./lib/install.js');
		var command = require('./lib/command.js');
		var uninstall = require('./lib/uninstall.js')
		//var init = require('./lib/init.js');
	
		//gladys.on('ready', function(){
		//init();
		//});
		
	return {
		install: install,
		command: command,
		uninstall: uninstall
		//init: init,
	};
};

