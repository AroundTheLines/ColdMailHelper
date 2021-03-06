(function(){//function wrapper, good form.

	var app = angular.module('coldMailer',[]);//creates the angular module that lets this web app run angular

	app.controller("ColdMailerController",function(){//controller for all of the functionality that'll be needed
		var coldCtrl = this;//typing coldCtrl instead of "this" makes the code a lot more readable(and also useable)

		coldCtrl.information = {};//new empty object
		coldCtrl.clicked = false;
		coldCtrl.addresses = [];

		coldCtrl.pushInfo = function(){
			coldCtrl.clicked = true;
			if(coldCtrl.information.cmpny != ""){
				coldCtrl.addresses = [
					coldCtrl.information.fName + "." + coldCtrl.information.lName + "@" + coldCtrl.information.cmpny,
					coldCtrl.information.fName.substring(0,1) + coldCtrl.information.lName + "@" + coldCtrl.information.cmpny,
					coldCtrl.information.fName + coldCtrl.information.lName.substring(0,1) + "@" + coldCtrl.information.cmpny
				];
			}
		}
	});
})();