app.controller('userController', function($scope,$rootScope,$http,$localStorage,usersResource) {	
	$scope.users= usersResource.get();
	$scope.newUser={
		"profile":"user",
		"lastname":""	
	};
	$scope.optionActive=1;
	$scope.messageError="";
	$scope.messageInfo="";
	$localStorage.users=$scope.users;		
	
	
	$scope.setOption = function(optionActive) {
		$scope.messageError="";
		$scope.messageInfo="";
		$scope.optionActive=optionActive;
	}
	
	$scope.isOption = function(optionActive) {
		 return $scope.optionActive==optionActive;
		
	}
	
	$scope.signIn = function() {		
		for (_i = 0; _i < $localStorage.users.length; _i++) { 			
			if( $scope.validateUserName($rootScope.user.username) && $localStorage.users[_i].pass == $rootScope.user.pass){
				 $rootScope.isLoggin=true;
				 $rootScope.user=$localStorage.users[_i];
			     return true;
			}
		}
		$scope.messageError="User not found!";
	}
	
	$scope.register = function() {	
		console.log($scope.newUser);
		var isUserRegister=false;
		
		for (_i = 0; _i < $localStorage.users.length; _i++) {
			if($scope.validateUserName($scope.newUser.username)){
				isUserRegister=true;
				break;
			}
		}
		
		if(!isUserRegister){
		   $scope.messageInfo="the user was  registered successfully!";
		   $localStorage.users.push($scope.newUser);
		}else{
			$scope.messageError="the user is alredy registered!";
		}
		
	}
	
	$scope.validateUserName = function(userName) {
		if($localStorage.users[_i].username == userName){
			return true;
		}
		
		return false;
		
	}
	
	
	
	
	
});