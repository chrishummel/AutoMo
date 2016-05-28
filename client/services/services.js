angular.module('automel.services', [])

.factory('Car', function($http){

	var getBasicInfo = function(VIN) {
		console.log('services: ',VIN)

		return $http({
			method: 'GET',
      url: '/vincarinfo?vinNum=' + VIN
		}).then(function(resp){
			console.log(resp.data)
			return resp.data
		})
			
	}

	var getMaintenance = function(vin){
		return $http({
			method: 'GET',
			url: '/maintenance?vin=' + vin
		}).then(function(resp){
			return resp
		})

	}

	var getEngine = function(vin){
		return $http({
			method: "GET",
			url: "/engine?vin=" + vin
		}).then(function(resp){
			return resp
		})
	}


	var carInfo = {};
	var maintInfo = {};
	var engineInfo = {};


	return {
		getBasicInfo: getBasicInfo,
		getMaintenance: getMaintenance,
		getEngine: getEngine
	}
})

.factory('User', function($http){

	var signUp = function(attrs) {
		 return $http({
		 	method: 'POST',
		 	url: '/signup',
		 	data: attrs
		 }).then(function(resp){
		 	console.log('signUp: ', resp)
		 })
	}

	var findByUserName = function(attrs) {
		 return $http({
		 	method: 'POST',
		 	url: '/signin',
		 	data: attrs
		 }).then(function(resp){
		 	console.log('signin result: ', resp)
		 	return resp
		 })
	}

	return {
		signUp: signUp,
		findByUserName: findByUserName
	}

})