

var homeApp = angular.module('HomeApp', ['ui.router']).run(function($rootScope){
$rootScope.userId = "";
$rootScope.userDetail;
//$stateProvider
//.state('eventmenu.financedet', {
//    url: "/views",
//    templateUrl: 'financedet.html'
});
/*homeApp.config(['$stateProvider','$urlRouterProvider',
           function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/financedet.html',
        controller: 'financeDetailCtrl'
      });
}
]);*/

//var homeApp = angular.module('HomeApp', ['ngRoute']);
homeApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('eventmenu', {
		cache: false,
		abstract: true,
		url: "/views",
		templateUrl: "reg1.html",
		controller: "compDetailCtrl"
	}).state('eventmenu.home', {
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "reg1.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('eventmenu.companydet', {
		cache: false,
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "views/companydet.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('eventmenu.financedet', {
		cache: false,
		url: "/home",
		views: {
			'menuContent': {
				url: "views",
				templateUrl: "financedet.html",
				//controller: "financeDetailCtrl"
			}
		}
	}).state('eventmenu.tradedet', {
		cache: false,
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "/tradedet.html",
				controller: "tradeDetailCtrl"
			}
		}
	}).state('eventmenu.bizdet', {
		cache: false,
		url: "/",
		views: {
			'menuContent': {
				templateUrl: "/bizdet.html",
				controller: "businessDetailCtrl"
			}
		}
	}).state('eventmenu.riskdet', {
		cache: false,
		url: "/",
		views: {
			'menuContent': {
				templateUrl: "/riskdet.html",
				controller: "riskMngDetailCtrl"
			}
		}
	}).state('eventmenu.riskscore', {
		cache: false,
		url: "/",
		views: {
			'menuContent': {
				templateUrl: "/riskdet.html",
//				controller: "ordersController as vm"
			}
		}
	})
	$urlRouterProvider.otherwise("/event/home");
});
var loginregApp = angular.module('LoginRegApp', []);






