homeApp.controller('customersCtrl', function($scope,$rootScope, $http, useridService) {
	
	 //console.log("***from dataservi---------ce*****"+useridService.getUserId());
	console.log(useridService.getUserId());
	$scope.userId = useridService.getUserId();
//	$scope.doSquare = function() {
//        $scope.answer = MathService.add(10,11);
//        console.log($scope.answer);
//    }
});


homeApp.controller('compDetailCtrl', function($scope, $http) {
	// Page:Registaration:CompanyDetail :: Submit
	
	$scope.compDetSubmit = function(userDetail){
		
		
	    console.log("cookie extracted in compDetailCtrl===>"+$scope.userId);
	    userDetail.userID = $scope.userId;
	    

	    userDetail.formID = 1;
	   
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

//Finance Detail Page
homeApp.controller('financeDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.financeDetSubmit = function(userDetail){
		console.log("***********Finance Management Detail Controller************");
		userDetail.formID = 2;
		userDetail.userID = $scope.userId;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

homeApp.controller('businessDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.businessDetSubmit = function(userDetail){
		userDetail.formID = 3;
		userDetail.userID = $scope.userId;
		console.log("***********Business Detail Controller************");
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

homeApp.controller('tradeDetailCtrl', function($scope, $http) {
	// Page:TradeDetails :: Submit
	$scope.tradeDetSubmit = function(userDetail){
		console.log("***********Trade Controller************");
		userDetail.formID = 4;
		userDetail.userID = $scope.userId;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});


homeApp.controller('riskMngDetailCtrl', function($scope, $http) {
	// Page:Risk Management :: Submit
	$scope.riskMngDetSubmit = function(userDetail){
		console.log("***********Risk Detail Controller************");
		userDetail.formID = 5;
		userDetail.userID = $scope.userId;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});






