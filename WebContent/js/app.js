

var homeApp = angular.module('HomeApp', []).run(function($rootScope){
$rootScope.userId = "";
$rootScope.userDetail;
});
//var homeApp = angular.module('HomeApp', ['ngRoute']);
//homeApp.config(function ($stateProvider, $urlRouterProvider) {
//	$stateProvider.state('eventmenu', {
//		cache: false,
//		abstract: true,
//		url: "/",
//		templateUrl: "reg1.html",
//		controller: "compDetailCtrl"
//	}).state('eventmenu.home', {
//		url: "/home",
//		views: {
//			'menuContent': {
//				templateUrl: "reg1.html",
//				controller: "compDetailCtrl"
//			}
//		}
//	}).state('eventmenu.companydet', {
//		cache: false,
//		url: "/forecast/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/companydet.html",
//				controller: "compDetailCtrl"
//			}
//		}
//	}).state('eventmenu.financedet', {
//		cache: false,
//		url: "/notifications/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/financedet.html",
//				controller: "financeDetailCtrl"
//			}
//		}
//	}).state('eventmenu.tradedet', {
//		cache: false,
//		url: "/summaryreport/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/tradedet.html",
//				controller: "tradeDetailCtrl"
//			}
//		}
//	}).state('eventmenu.bizdet', {
//		cache: false,
//		url: "/summaryreport/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/bizdet.html",
//				controller: "businessDetailCtrl"
//			}
//		}
//	}).state('eventmenu.riskdet', {
//		cache: false,
//		url: "/bakeryParLevel/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/riskdet.html",
//				controller: "riskMngDetailCtrl"
//			}
//		}
//	}).state('eventmenu.riskscore', {
//		cache: false,
//		url: "/recommendedOrders/:dept/:store/:nflag",
//		views: {
//			'menuContent': {
//				templateUrl: "views/riskdet.html",
////				controller: "ordersController as vm"
//			}
//		}
//	})
//	$urlRouterProvider.otherwise("/event/home");
//});
var loginregApp = angular.module('LoginRegApp', []);






