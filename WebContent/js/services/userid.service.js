homeApp.service('useridService', function($rootScope,$http) {
    this.getUserId = function() { 
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
	    return userid;
    	
    },
    this.getHost = function(type) { 
	$http.get('resource/config.properties').then(function (response) {
	        console.log('local_host is ========', response.data.local_host);
	        console.log('aws_host is ========', response.data.aws_host);
	        if(type == "aws") {
	        	return response.data.aws_host;
		   	 } else {
		   		return response.data.local_host;
		   	 }
	      });
	};
});