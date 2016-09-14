homeApp.factory('userdetService', function() {
	var savedUserdet = {}
	 function set(userDet) {
		savedUserdet = userDet;
	 }
	 function get() {
	  return savedUserdet;
	 }
	
	 return {
	  set: set,
	  get: get
	 }

});
