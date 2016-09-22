
	//var application = angular.module('loginregApp', []);
    //var loginregApp = angular.module('loginregApp', []);
	
	loginregApp.controller('loginController', function($scope,$rootScope, $http, $location){
		
		//Hide & Seek : Login & Reg Div
		$rootScope.userDetail="";
		$scope.show = 'false';
		$rootScope.userId='sujit';
		$rootScope.host='';
		//$rootScope.host = "http://localhost:8080/PrecipiceIP/";
		//$rootScope.host = "http://pipservices.us-west-2.elasticbeanstalk.com/";
		$scope.showRegDiv = function(){
			//$scope.show = $scope.show == 'false' ? 'true' : 'false';
			$scope.show = 'true';
			$scope.loginRegistartion = "";
		}
		$scope.showLoginDiv=function(){
	        $scope.show='false';
	        $scope.loginRegistartion = "";
	    }
		//Hide & Seek : End
		
		$scope.loginSubmit = function(){
			 $http.post($rootScope.host+"rest/user/login", $scope.loginRegistartion)
			 .success(function(response){
				 if(response != "" && response != null){
					 document.cookie='userId='+response;
					 window.location= './views/home.html'
				 } else{
					alert("Invalid User Name or Password");
					$scope.loginRegistartion = "";
				 }
			 }); 
		}
		
		// Registration Service Call
		 $scope.registration = function(){
			$http.post($rootScope.host+"rest/user/registarion", $scope.loginRegistartion)
			 .success(function(response){
				 console.log("=======> " + response);
				
				// $.cookie("userId", response);
				 $rootScope.userId = response; 
				 
				 document.cookie='userId='+response;
				 //alert($.cookie("userId"));
				 //TODO: Need to change
				 if(response != null){
					 window.location= './views/home.html';
						//window.location= './views/reg1.html?userId='+response
						//$location.path('./views/reg1.html?userId='+response)
				 } else{
					 alert("Registration failed. User ID already exist.");
					 $scope.loginRegistartion = "";
				 }
		 }); 
			 
		} 
		// Forgot Password Service Call
		/* $scope.forgotPW = function(){
			console.log("^^^^^^^^^^^^^^^^^^^^^^^^^"+ $scope.loginRegistartion.emailID +"\n and password: " + $scope.loginRegistartion.password);
			$http.post($rootScope.host+"rest/user/forgotPassword", $scope.loginRegistartion)  //TODO : Set the email ID Only.
			 .success(function(response){
				 console.log("=======> " + response);
			 });
		} */
	});