

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


/*homeApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('eventmenu', {
		cache: false,
		abstract: true,
		url: "/event",
		//templateUrl: "views/reg1.html",
		controller: "compDetailCtrl"
	}).state('eventmenu.home', {
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "views/reg1.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('#comp', {
		cache: false,
		url: "/comp",
		views: {
			'menuContent': {
				templateUrl: "views/companydet.html",
				controller: "compDetailCtrl"
			}
		}
	}).state('#fin', {
		cache: false,
		url: "/fin",
		views: {
			'menuContent': {
				//url: "views",
				templateUrl: "views/financedet.html",
				controller: "financeDetailCtrl"
			}
		}
	}).state('#trd', {
		cache: false,
		url: "/trd",
		views: {
			'menuContent': {
				templateUrl: "views/tradedet.html",
				controller: "tradeDetailCtrl"
			}
		}
	}).state('#biz', {
		cache: false,
		url: "/biz",
		views: {
			'menuContent': {
				templateUrl: "views/bizdet.html",
				controller: "businessDetailCtrl"
			}
		}
	}).state('#risk', {
		cache: false,
		url: "/",
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
				templateUrl: "views/riskdet.html",
//				controller: "ordersController as vm"
			}
		}
	})
	//$urlRouterProvider.otherwise("/event/home");
});*/
/*homeApp.config(function($stateProvider) {
	  $stateProvider
	  .state('#comp', {
	      url: "/comp",
	      views: {
	        "fin": { 
	        	template: "reg1.comp" }
	      }
	    })
	    .state('#fin', {
	      url: "/fin",
	      views: {
	        "fin": { 
	        	template: "reg1.fin" }
	      }
	    })
	     .state('#biz', {
	      url: "/biz",
	      views: {
	        "biz": { template: "reg1.biz" }
	      }
	    })
	     .state('#trd', {
	      url: "/trd",
	      views: {
	        "trd": { template: "reg1.trd" }
	      }
	    })
	    .state('#risk', {
	      url: "/risk",
	      views: {
	        "risk": { template: "reg1.risk" }
	      }
	    })
	});*/
var loginregApp = angular.module('LoginRegApp', []);
var homeApp = angular.module('formApp', ['ngAnimate', 'ui.router']).run(function($rootScope){
	$rootScope.userId = "";
	$rootScope.userDetail;
	
	})

//configuring our routes 
//=============================================================================
.config(function($stateProvider, $urlRouterProvider) {
 
 $stateProvider
 
     // route to show our basic form (/form)
     .state('form', {
         url: '/form',
         templateUrl: 'form.html',
         controller: 'formController'
     })
     
     // nested states 
     // each of these sections will have their own view
     // url will be nested (/form/profile)
     .state('form.profile', {
         url: '/profile',
         templateUrl: 'companydet.html'
     })
     
     // url will be /form/interests
     .state('form.finance', {
         url: '/finance',
         templateUrl: 'financedet.html'
     })
     
     // url will be /form/payment
     .state('form.biz', {
         url: '/biz',
         templateUrl: 'bizdet.html'
     })
     
      // url will be /form/payment
     .state('form.trade', {
         url: '/trade',
         templateUrl: 'tradedet.html'
     })
 
	//url will be /form/payment
	 .state('form.risk', {
	     url: '/risk',
	     templateUrl: 'riskdet.html'
	 })
	  // url will be /form/payment
     .state('form.report', {
         url: '/report',
         templateUrl: 'report.html'
     });
    
 // catch all route
 // send users to the form page 
 $urlRouterProvider.otherwise('/form/profile');
})

//our controller for the form
//=============================================================================
.controller('formController', function($scope) {
 
 // we will store all of our form data in this object
 $scope.formData = {};
 
 // function to process the form
 $scope.processForm = function() {
     alert('awesome!');  
 };
// $scope.create = function() {
//	 alert("");
//     /* $location.path('/tab/newpost'); */   /* this variant doesnt work */
//     $state.go('form.report'); 
//   };
});
//homeApp.controller('navCtrl', function ($scope, $location, $state, Post, Auth) {
//   
//    $scope.create = function() {
//       $state.go('form.report'); 
//    };
//  });






