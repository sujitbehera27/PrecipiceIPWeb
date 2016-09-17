

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
		url: "/event",
		templateUrl: "views/reg1.html"
	}).state('eventmenu.home', {
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "views/reg1.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('eventmenu.companydet', {
		cache: false,
		url: "/comp",
		views: {
			'menuContent': {
				templateUrl: "views/companydet.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('eventmenu.financedet', {
		cache: false,
		url: "/fin",
		views: {
			'menuContent': {
				//url: "views",
				templateUrl: "views/financedet.html",
				controller: "financeDetailCtrl"
			}
		}
	}).state('eventmenu.tradedet', {
		cache: false,
		url: "/trd",
		views: {
			'menuContent': {
				templateUrl: "views/tradedet.html",
				controller: "tradeDetailCtrl"
			}
		}
	}).state('eventmenu.bizdet', {
		cache: false,
		url: "/biz",
		views: {
			'menuContent': {
				templateUrl: "views/bizdet.html",
				controller: "businessDetailCtrl"
			}
		}
	}).state('eventmenu.riskdet', {
		cache: false,
		url: "/risk",
		views: {
			'menuContent': {
				templateUrl: "views/riskdet.html",
				controller: "riskMngDetailCtrl"
			}
		}
	}).state('eventmenu.riskscore', {
		cache: false,
		url: "/risk",
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






