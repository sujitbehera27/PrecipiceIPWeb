homeApp.service('propertyService', function($rootScope,$http) {
	this.getHost = function(type) { 
		var host = "";
		console.log("~~~~~~~~");
	$http.get('resource/config.properties').then(function (response) {
	        console.log('local_host is ========', response.data.local_host);
	        console.log('aws_host is ========', response.data.aws_host);
	        host = response.data.local_host;
//	        $rootScope.localHost = response.data.local_host;
//	        $rootScope.localHost = response.data.aws_host;
	      });
//	 if(type == "aws") {
//		 return response.data.aws_host;
//	 } else {
//		 return response.data.local_host;
//	 }
	 return host;
	};
});