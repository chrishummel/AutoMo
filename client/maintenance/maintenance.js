angular.module('automel.carmaint', [])

.controller("maintenanceController", function($scope, $location, Car){


	var holder = Car.maintInfo.data.data.actionHolder;

	var uniq = [];
	var checker = {}

	holder.forEach(function(obj){
		key = obj.item + obj.intervalMileage + obj.action;
		if (!checker[key]) {
			checker[key] = true;
			(obj.intervalMileage === 0) ? obj.intervalMileage="Routine" : obj.intervalMileage
			uniq.push(obj)
		}
	})

	$scope.data = uniq
	
})