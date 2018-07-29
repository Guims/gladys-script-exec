const Promise = require('bluebird')
const sentences = require('./sentences.js')
const answers = require('./answers.js')
const shared = require('./shared.js');

module.exports = function install(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id')
		.then(function(language){
			insertAnswers(answers, language[0].language)
			insertSentences(language[0].language)
		})	
		.catch((err) => {
			sails.log.error('Une erreur s\'est produite dans l\'ajouts des phrases ou réponses')
			return Promise.reject()
		})
		.then(() => { //Script 1
			gladys.param.getValue(shared.gladysScriptUn)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptUn + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptUn,
				value: shared.gladysScriptUnValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 2
			gladys.param.getValue(shared.gladysScriptDeux)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptDeux + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptDeux,
				value: shared.gladysScriptDeuxValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 3
			gladys.param.getValue(shared.gladysScriptTrois)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptTrois + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptTrois,
				value: shared.gladysScriptTroisValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 4
			gladys.param.getValue(shared.gladysScriptQuatre)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptQuatre + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptQuatre,
				value: shared.gladysScriptQuatreValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 5
			gladys.param.getValue(shared.gladysScriptCinq)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptCinq + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptCinq,
				value: shared.gladysScriptCinqValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 6
			gladys.param.getValue(shared.gladysScriptSix)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptSix + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptSix,
				value: shared.gladysScriptSixValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 7
			gladys.param.getValue(shared.gladysScriptSept)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptSept + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptSept,
				value: shared.gladysScriptSeptValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 8
			gladys.param.getValue(shared.gladysScriptHuit)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptHuit + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptHuit,
				value: shared.gladysScriptHuitValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 9
			gladys.param.getValue(shared.gladysScriptNeuf)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptNeuf + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptNeuf,
				value: shared.gladysScriptNeufValue,
		    }
			createParam(param)
			})
		})
		.then(() => { //Script 10
			gladys.param.getValue(shared.gladysScriptDix)
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysScriptDix + '. Doing nothing.')
			})
			.catch(() => {
			var param = {
				name: shared.gladysScriptDix,
				value: shared.gladysScriptDixValue,
		    }
			createParam(param)
			})
		})
};	

function createParam(param){
   
   return gladys.param.setValue(param)
        .then(() => {
			sails.log.info(`ScriptExec: Param ${param.name} inserted !`)
            return Promise.resolve();
        })
        .catch((err) => {
            sails.log.error(`ScriptExecParam: Error when inserting param: ${err}`)
            return Promise.reject()
		})
}

function insertSentences(language){

	if(language == 'fr-FR'){
		return gladys.sentence.insertBatch(sentences.fr)
			.then(() => {
				gladys.brain.trainNew()
				sails.log.info('ScriptExec: Sentences added !')
				return Promise.resolve()
			})
			.catch((err) => {
				sails.log.error(`Erreur : les phrases n'ont pas été ajoutées : ${err}`)
				return Promise.reject()
			})
	}else{
		return gladys.sentence.insertBatch(sentences.en)
			.then(() => {
				gladys.brain.trainNew()
				sails.log.info('ScriptExec: Sentences added !')
				return Promise.resolve()
			})
			.catch((err) => {
				sails.log.error(`Erreur : les phrases n'ont pas été ajoutées : ${err}`)
				return Promise.reject()
			})
	}
};


function insertAnswers(answers, language){
	if(language == 'fr-FR'){
	// foreach answer
	return Promise.map([answers.fr], function(answer) {
		// add infos to each response 
		return Promise.map(answer.responses, function(response) {
			response.language = answer.language;
			response.label = answer.label;
			response.needAnswer = answer.needAnswer;
			// and create answer in DB
			return gladys.answer.create(response);
		});
	});
	} else {
		// foreach answer
	return Promise.map([answers.en], function(answer) {
		// add infos to each response 
		return Promise.map(answer.responses, function(response) {
			response.language = answer.language;
			response.label = answer.label;
			response.needAnswer = answer.needAnswer;
			// and create answer in DB
			return gladys.answer.create(response);
		});
	});
	}
}
