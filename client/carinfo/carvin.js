angular.module('automel.carvin', [])

.controller("carVinController", function($scope, $location, Car){
	console.log('hello')
	$scope.data = {};



	$scope.getBasicInfo = function(VIN) {
		Car.getBasicInfo(VIN.vinNum)
			.then(function(resp){
				Car.carInfo = Object.assign({},resp, VIN);
				$location.url('/vincarinfo')

			})
	}




})