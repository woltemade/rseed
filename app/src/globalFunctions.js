var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    // Get his guid
	var myguid = localStorage.getItem("guid");
	if (myguid === null){
		//guid from storage is: null, so get / set new one
		var myguid = guid();
		localStorage.setItem("guid", myguid);
	}else{
		//Guid from storage is NOT null - get it
		var myguid = localStorage.getItem("guid");
	}
	
} else {
    // Sorry! No Web Storage support..
    console.log("no local storage:");
}

console.log(myguid);

Modernizr.load({
  test: Modernizr.geolocation,
  yep: 'lib/geoPosition_Modern.js',
  nope: 'lib/geoPosition.js',
});

