angular.module('automel.carinfo', [])

.controller("carInfoController", function($scope, $location, Car){

	console.log(Car.carInfo)
	
	$scope.VIN = Car.carInfo.vinNum
	console.log($scope.VIN)
	
	$scope.make = Car.carInfo.data.make.name;
	$scope.model = Car.carInfo.data.model.name;
	$scope.trim = (Car.carInfo.data.trim && Car.carInfo.data.trim.name) ? Car.carInfo.data.trim.name : "N/A"
	$scope.year = Car.carInfo.data.year;
	$scope.vechicleType = (!!Car.carInfo.data.vehicleStyle) ? Car.carInfo.data.vehicleStyle : "N/A";
	$scope.compressor = (!!Car.carInfo.data.compressorType) ? Car.carInfo.data.compressorType : "N/A"
	$scope.cylinders = Car.carInfo.data.cylinders;
	$scope.drivenWheels = Car.carInfo.data.drivenWheels;

	
	$scope.getMaintenance = function() {
		Car.getMaintenance($scope.VIN)
		.then(function(data){
			Car.maintInfo = Object.assign({}, data)
			$location.url("/maintenance")
		})
	}
	
	$scope.getEngine = function() {
		Car.getEngine($scope.VIN)
			.then(function(data){
				Car.engineInfo = Object.assign({},data)
				$location.url("/engine")
			})
	}

})