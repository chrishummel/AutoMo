angular.module('automel.user', [])

.controller('userController', function($scope, $location, User) {

	$scope.signup = function() {
		User.signUp($scope.newUser)
			.then(function(resp){
				$location.url('/home')
			})
	}

	$scope.signin = function() {
		User.findByUserName($scope.user)
			.then(function(resp){
				if(resp.data === true) {
					$location.url('/home')
				} else {
					$location.url("/")
				}
				
				
			})
	}


})



