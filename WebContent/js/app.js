
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$rootScope, $http) {
	
    /*$http.get("customers.php").then(function (response) {
        $scope.names = response.data.records;
    });*/
});

app.controller('compDetailCtrl', function($scope, $http) {
	// Page:Registaration:CompanyDetail :: Submit
	
	$scope.compDetSubmit = function(userDetail){
		
		console.log("**********Company Detail Controller*************");
		var name = "userId=";
		var userid = "";
	    var ca = document.cookie.split(';');
		
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	userid=c.substring(name.length,c.length);
	        }
	    }
	    userid=userid.replace(/"/g,"");
	    console.log("cookie extracted===>"+userid);
	    userDetail.userID = userid;
	    

	    userDetail.formID = 1;
	    
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

//Finance Detail Page
app.controller('financeDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.financeDetSubmit = function(userDetail){
		console.log("***********Finance Management Detail Controller************");
		userDetail.formID = 2;
		var name = "userId=";
		var userid = "";
	    var ca = document.cookie.split(';');
		
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	userid=c.substring(name.length,c.length);
	        }
	    }
	    userid=userid.replace(/"/g,"");
	    console.log("cookie extracted===>"+userid);
	    userDetail.userID = userid;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

app.controller('businessDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.businessDetSubmit = function(userDetail){
		userDetail.formID = 3;
		var name = "userId=";
		var userid = "";
	    var ca = document.cookie.split(';');
		
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	userid=c.substring(name.length,c.length);
	        }
	    }
	    userid=userid.replace(/"/g,"");
	    console.log("cookie extracted===>"+userid);
	    userDetail.userID = userid;
		console.log("***********Business Detail Controller************");
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

app.controller('tradeDetailCtrl', function($scope, $http) {
	// Page:TradeDetails :: Submit
	$scope.tradeDetSubmit = function(userDetail){
		console.log("***********Trade Controller************");
		userDetail.formID = 4;
		var name = "userId=";
		var userid = "";
	    var ca = document.cookie.split(';');
		
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	userid=c.substring(name.length,c.length);
	        }
	    }
	    userid=userid.replace(/"/g,"");
	    console.log("cookie extracted===>"+userid);
	    userDetail.userID = userid;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});


app.controller('riskMngDetailCtrl', function($scope, $http) {
	// Page:Risk Management :: Submit
	$scope.riskMngDetSubmit = function(userDetail){
		console.log("***********Risk Detail Controller************");
		userDetail.formID = 5;
		var name = "userId=";
		var userid = "";
	    var ca = document.cookie.split(';');
		
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	userid=c.substring(name.length,c.length);
	        }
	    }
	    userid=userid.replace(/"/g,"");
	    console.log("cookie extracted===>"+userid);
	    userDetail.userID = userid;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});






