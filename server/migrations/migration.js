var Contacts = require('../models/Contacts');
var Action = require('../models/Action');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amabiliskz');


Action.create({
	title:'Супер акция',
	description:'Рады сообщить о скидке на кресла для руководителей ELF. Для более подробной информации обращайтесь в офис нашей компании',
	date:'02.05.18'
},function(err){
	if(err) return err;
	console.log('action created')
});



Contacts.create({
	number:'878798',
	mobile:'87771986202',
	address:'Баймагамбетова 3№10',
	email:'amabilis.amabilis@mail.ru'
},function(error){
	if(error) return next(error);
	console.log('contact created')
});