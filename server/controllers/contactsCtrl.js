var Contacts = require('../models/Contacts');


module.exports.getAll = function(req, res, next){
	Contacts.find({}).exec(function(error,answer) {
		if(error) return next(error);
		console.log('contacts find',answer)
		res.send(answer);
	});
};

module.exports.update = function(req, res, next){
	Contacts.findOneAndUpdate({},req.body.fields).exec(function(error,answer) {
		if(error) return next(error);
		res.send(answer);
	});
};