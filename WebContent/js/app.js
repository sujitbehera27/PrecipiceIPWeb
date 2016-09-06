
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$rootScope, $http) {
	
    /*$http.get("customers.php").then(function (response) {
        $scope.names = response.data.records;
    });*/
});

app.controller('compDetailCtrl', function($scope, $http) {
	// Page:Registaration:CompanyDetail :: Submit
	$scope.compDetSubmit = function(){
		console.log("**********Company Detail Controller*************");
		console.log("^^^^^^^User Name^^^^^^^^^^^^^^"+ $scope.companyDetail.userName);
		
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/companyDet", $scope.companyDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 $window.location.href= './financedet.html'
		 });
	}
});

//Finance Detail Page
app.controller('financeDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.financeDetSubmit = function(){
		console.log("***********Finance Management Detail Controller************");
		//console.log("1111111...... ==> "+ $scope.financialDetail.busInCountries);
		//$scope.financialDetail.busInCountries  = JSON.stringify($scope.financialDetail.busInCountries);
		//console.log("2222222......==> "+ $scope.financialDetail.busInCountries);
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/financialDet", $scope.financialDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

app.controller('businessDetailCtrl', function($scope, $http) {
	// Page:FinanceDetail :: Submit
	$scope.businessDetSubmit = function(){
		console.log("***********Business Detail Controller************");
		console.log("Top 5 Company To Business ==> "+ $scope.businessDetail.compOverall);
		console.log("Company Wide IP Policy ==> "+ $scope.businessDetail.compIpPolicy);
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/businessDet", $scope.businessDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});

app.controller('tradeDetailCtrl', function($scope, $http) {
	// Page:TradeDetails :: Submit
	$scope.tradeDetSubmit = function(){
		console.log("***********Trade Controller************");
		console.log("Preserve Copy Right ==> "+ $scope.tradeDetail.preserveCopyRight);
		console.log("Register It's Trade Mark ==> "+ $scope.tradeDetail.regTradeMark);
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/tradeDet", $scope.tradeDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});


app.controller('riskMngDetailCtrl', function($scope, $http) {
	// Page:Risk Management :: Submit
	$scope.riskMngDetSubmit = function(){
		console.log("***********Risk Detail Controller************");
		console.log("Protect Conf Info ==> "+ $scope.riskMngDetail.hasConfInfo);
		console.log("Has IP Policy ==> "+ $scope.riskMngDetail.hasIpPolicy);
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/riskMng", $scope.riskMngDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			// $window.location.href= './financedet.html'
		 });
	}
});






