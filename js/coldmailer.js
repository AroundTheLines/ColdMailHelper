(function(){

	var app = angular.module('coldMailer',[]);

	app.controller("ColdMailerController",function(){
		var coldCtrl = this;

		coldCtrl.information = [];

		coldCtrl.pushInfo = function(){
			coldCtrl.information.push({firstname: coldCtrl.fName, lastname: coldCtrl.lName, company: coldCtrl.cmpny});
		}
	});
})();