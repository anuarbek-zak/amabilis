var Action = require('../models/Action');

module.exports.getAll = function(req, res, next){
	Action.find({}).exec(function(error,answer) {
		if(error) return next(error);
		res.send(answer);
	});
};

module.exports.update = function(req, res, next){
	Action.find({}).exec(function(error,answer) {
		if(error) return next(error);
		answer[0].title = req.body.title;
		answer[0].description = req.body.description;
		answer[0].date = req.body.date;
		answer[0].save(function(error,ans){
			if(error) return next(error);
			res.send(ans);
		})
	});
};