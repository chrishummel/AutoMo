angular.module('automel', ['automel.carvin','automel.services','automel.carinfo','automel.user',
	'automel.carmaint','automel.engine','ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when("/vincarinfo",{
			templateUrl: './carinfo/carinfo.html',
			controller: 'carInfoController'
		})
		.when("/" , {
			templateUrl: './User/user.html',
			controller: 'userController'
		})
		.when("/home", {
			templateUrl: './carinfo/carvin.html',
			controller: 'carVinController'
		})
		.when("/maintenance", {
			templateUrl: './maintenance/maintenance.html',
			controller: 'maintenanceController'
		})

})

.run(function ($rootScope, $location) {

})