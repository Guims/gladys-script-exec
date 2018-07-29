var Promise = require('bluebird');
const shared = require('./shared.js')

module.exports = function command(options){
  console.log(options); 
  
    var response = {
        label: 'script-exec'
	};
  
  switch(options.label){
      case 'script1':  //SCRIPT1
		return gladys.param.getValue(shared.gladysScriptUn)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script2':  //SCRIPT2
		return gladys.param.getValue(shared.gladysScriptDeux)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script3':  //SCRIPT3
		return gladys.param.getValue(shared.gladysScriptTrois)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script4':  //SCRIPT4
		return gladys.param.getValue(shared.gladysScriptQuatre)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script5':  //SCRIPT5
		return gladys.param.getValue(shared.gladysScriptCinq)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script6':  //SCRIPT6
		return gladys.param.getValue(shared.gladysScriptSix)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script7':  //SCRIPT7
		return gladys.param.getValue(shared.gladysScriptSept)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script8':  //SCRIPT8
		return gladys.param.getValue(shared.gladysScriptHuit)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script9':  //SCRIPT9
		return gladys.param.getValue(shared.gladysScriptNeuf)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  case 'script10':  //SCRIPT10
		return gladys.param.getValue(shared.gladysScriptDix)
			.then((scriptid) => { 
				gladys.script.exec({id:scriptid})
			.then(function() {
				sails.log.info('ScriptExec : script lancé !')
				return Promise.resolve()
			})
			.catch(function(err){
				sails.log.error('ScriptExec : script non lancé. Error : ${err}')
				return Promise.reject()
			})
			return response;
			});
      break;
	  
  }
  

};