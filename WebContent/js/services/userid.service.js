homeApp.service('useridService', function() {
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
    	
    };
});