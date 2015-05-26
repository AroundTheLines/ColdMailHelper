(function(){

	var app = angular.module('coldMailer',[]);

	app.controller("ColdMailerController",function(){
		this.coldmailer = {};

		this.generate = function(){
			identification.push(this.coldmailer);
		};
	});

	var identification = {coldmailer:{firstName}};

})();