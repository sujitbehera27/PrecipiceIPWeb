homeApp.controller('customersCtrl', function($scope,$rootScope, $http,useridService) {
	
	 //console.log("***from dataservi---------ce*****"+useridService.getUserId());
	console.log(useridService.getUserId());
	/**/
	//var userID = "sambit";
	var userID = useridService.getUserId();
	$rootScope.userId = userID;
	 if(userID == "" || userID == null){
		 console.log("Redirect To Login Page : But Not Working")
		 window.location= './index.html';
	 }
	
	$http.get("http://localhost:8080/PrecipiceIP/rest/reg/userDetails/"+userID)
	 .success(function(response){
		 console.log("=======> " + response);
		 if(response != "" && response != null){
			 $rootScope.userDetail = response;
		 } else{
			 window.location= 'index.html';
		 }
	 });
	
	//$rootScope.userId = useridService.getUserId();
	//$rootScope.userDetail = "";
//	$scope.doSquare = function() {
//        $scope.answer = MathService.add(10,11);
//        console.log($scope.answer);
//    }
});


homeApp.controller('compDetailCtrl', function($scope,$rootScope,$window,$state, $http,useridService) {
	// Page:Registaration:CompanyDetail :: Submit
	
	$scope.compDetSubmit = function(userDetail){
		
		
	    console.log("cookie extracted in compDetailCtrl===>"+$rootScope.userId);
	    //userDetail.userID = $rootScope.userId;
	    

	    userDetail.formID = 2;
//	    $scope.lclUserDetail = userDetail;
	    //userdetService.set(userDetail);
	    
	    $rootScope.userDetail = userDetail;
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", $rootScope.userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 if(response != ""){
				 $rootScope.userDetail = response;
			 }
		//	 $('.nav-tabs > .active').next('li').find('a').trigger('click');
			 //$state.go('eventmenu.financedet', {}, {reload : true});
			 $state.go('form.finance');
//			 $scope.lclUserDetail = userDetail;
			// $window.location.href= './financedet.html'
		 });
		//$scope.lclUserDetail = userDetail;
	}
});

//Finance Detail Page
homeApp.controller('financeDetailCtrl', function($scope,$rootScope,$state, $http,useridService ) {
	// Page:FinanceDetail :: Submit
	$scope.financeDetSubmit = function(userDetail){
//		userDetail = $scope.lclUserDetail;
		console.log("***********Finance Management Detail Controller************");
		userDetail.formID = 2;
		//userDetail.userID = $rootScope.userId;
		userDetail.userID = useridService.getUserId();
		console.log("ROOT OBJECT====>"+$rootScope.userDetail.formID);
		//userDetail = angular.extend($rootScope.userDetail);
		$rootScope.userDetail.formID = 2;
		$rootScope.userDetail.annualRev = userDetail.annualRev;
		$rootScope.userDetail.noOfEmp = userDetail.noOfEmp;
		$rootScope.userDetail.investInRnD = userDetail.investInRnD;
		$rootScope.userDetail.thirdPartyProd = userDetail.thirdPartyProd;
		$rootScope.userDetail.compBusType = userDetail.compBusType;
		$rootScope.userDetail.sellService = userDetail.sellService;
		$rootScope.userDetail.sellProdAndSvc = userDetail.sellProdAndSvc;
		$rootScope.userDetail.licProp = userDetail.licProp;
		$rootScope.userDetail.sellService = userDetail.sellService;
		
		
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", $rootScope.userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 if(response != ""){
				 $rootScope.userDetail = response;
			 }
//			 $('.nav-tabs > .active').next('li').find('a').trigger('click');
			$state.go('form.biz');
//			 $scope.lclUserDetail = userDetail;
			// $window.location.href= './financedet.html'
		 });
	}
});

homeApp.controller('businessDetailCtrl', function($scope,$rootScope,$state, $http,useridService) {
	// Page:FinanceDetail :: Submit
	$scope.businessDetSubmit = function(userDetail){
		userDetail.formID = 3;
		//userDetail.userID = $rootScope.userId;
		userDetail.userID = useridService.getUserId();
		$rootScope.userDetail.formID = 2;
		$rootScope.userDetail.compOverall = userDetail.compOverall;
		$rootScope.userDetail.compByBu = userDetail.compByBu;
		$rootScope.userDetail.compMarketAct = userDetail.compMarketAct;
		$rootScope.userDetail.compIpPolicy = userDetail.compIpPolicy;
		$rootScope.userDetail.compIpStrategy = userDetail.compIpStrategy;
		$rootScope.userDetail.businesStrategy = userDetail.businesStrategy;
		
		console.log("***********Business Detail Controller************");
		
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", $rootScope.userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 if(response != ""){
				 $rootScope.userDetail = response;
			 }
//			 $('.nav-tabs > .active').next('li').find('a').trigger('click');
			 $state.go('form.trade');
//			 $scope.lclUserDetail = userDetail;
			// $window.location.href= './financedet.html'
		 });
	}
});

homeApp.controller('tradeDetailCtrl', function($scope,$rootScope,$state, $http,useridService) {
	// Page:TradeDetails :: Submit
	$scope.tradeDetSubmit = function(userDetail){
		console.log("***********Trade Controller************");
		userDetail.formID = 4;
		//userDetail.userID = $rootScope.userId;
		userDetail.userID = useridService.getUserId();
		$rootScope.userDetail.formID = 2;
		$rootScope.userDetail.preserveCopyRight = userDetail.preserveCopyRight;
		$rootScope.userDetail.preserveCopyRight=userDetail.preserveCopyRight;
		$rootScope.userDetail.regTradeMark=userDetail.regTradeMark;
		$rootScope.userDetail.domainRefBN=userDetail.domainRefBN;
		$rootScope.userDetail.domainRefPN=userDetail.domainRefPN;
		$rootScope.userDetail.tradeSec=userDetail.tradeSec;
		$rootScope.userDetail.categoriTradeSec=userDetail.categoriTradeSec;
		$rootScope.userDetail.mngCyberSecRisk = userDetail.mngCyberSecRisk
		$rootScope.userDetail.protectTradeSec = userDetail.protectTradeSec;
		$rootScope.userDetail.protectConfInfo = userDetail.protectConfInfo;
		
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", $rootScope.userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 if(response != ""){
				 $rootScope.userDetail = response;
			 }
//			 $('.nav-tabs > .active').next('li').find('a').trigger('click');
			// $state.go('eventmenu.financedet');
			 $state.go('form.risk');
//			 $scope.lclUserDetail = userDetail;
			// $window.location.href= './financedet.html'
		 });
	}
});


homeApp.controller('riskMngDetailCtrl', function($scope,$rootScope,$state, $http,useridService) {
	// Page:Risk Management :: Submit
	$scope.riskMngDetSubmit = function(userDetail){
		console.log("***********Risk Detail Controller************");
		userDetail.formID = 5;
		//userDetail.userID = $rootScope.userId;
		userDetail.userID = useridService.getUserId();
		$rootScope.userDetail.formID = 2;
		$rootScope.userDetail.hasConfInfo = userDetail.hasConfInfo;
		$rootScope.userDetail.hasIpPolicy = userDetail.hasIpPolicy;
		$rootScope.userDetail.agreementMngProt = userDetail.agreementMngProt;
		$rootScope.userDetail.agreementMngProt = userDetail.agreementMngProt;
		$rootScope.userDetail.hasErm = userDetail.hasErm;
		$rootScope.userDetail.thirdPartyLia = userDetail.thirdPartyLia;
		$rootScope.userDetail.selfInsIpLose = userDetail.selfInsIpLose;
		$rootScope.userDetail.purchedThirdPartyIns = userDetail.purchedThirdPartyIns;
		$rootScope.userDetail.hasOverIpGov = userDetail.hasOverIpGov;
		
		
		$http.post("http://localhost:8080/PrecipiceIP/rest/reg/user", $rootScope.userDetail)
		 .success(function(response){
			 console.log("=======> " + response);
			 if(response != ""){
				 $rootScope.userDetail = response;
			 }
			// $('.nav-tabs > .active').next('li').find('a').trigger('click');
			// $state.go('eventmenu.financedet');
			 $state.go('form.biz');
//			 $scope.lclUserDetail = userDetail;
			// $window.location.href= './financedet.html'
		 });
	}
});






