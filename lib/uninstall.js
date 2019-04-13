const Promise = require('bluebird')
const shared = require('./shared.js')

module.exports = function uninstall(){
	return deleteSentences()
		.then(() => {
			deleteAnswers()
		})
		.then(() => {
			param = {name:shared.gladysScriptUn}
			deleteParameters(param)
		})
		.then(() => {
			param = {name:shared.gladysScriptDeux}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptTrois}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptQuatre}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptCinq}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptSix}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptSept}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptHuit}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptNeuf}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptDix}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptOnze}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptDouze}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptTreize}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptQuatorze}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptQuinze}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptSeize}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptDixSept}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptDixHuit}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptDixNeuf}
			deleteParameters(param)
		}).then(() => {
			param = {name:shared.gladysScriptVingt}
			deleteParameters(param)
		})
		.then(() => {
			return Promise.resolve()
		})
	
}


function deleteSentences(){
	return gladys.utils.sql('delete from sentence where service like ?', "%script%")
		.then(() => {
			sails.log.info('ScriptExec : Sentences deleted !')
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`ScriptExec : Error on deleting sentences : ${err}`)
			return Promise.reject()
		})
}

function deleteAnswers(){
	return gladys.utils.sql('delete from answer where label = ?', "script-exec")
		.then(() => {
			sails.log.info('ScriptExec : Answers deleted !')
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`ScriptExec : Error on deleting answers : ${err}`)
			return Promise.reject()
		})
}

function deleteParameters(param){
	return gladys.param.delete(param)
		.then((param) => {
			sails.log.info(`ScriptExec : Param ${param.name} deleted !`)
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`ScriptExec : Error on deleting param ${param.name} : ${err}`)
			return Promise.reject()
		})

}
